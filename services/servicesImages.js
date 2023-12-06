const pool = require('../libs/Conection.js');

class imagesServices {
    constructor() {
        this.sesion = {};
        this.pool = pool;
        this.pool.on('error', (err) => {
            console.log(err);
        });
    }

    async createImage(imageData) {
        try {
            const client = await this.pool.connect();
            const result = await client.query(`
                INSERT INTO Images (business_id, image_url)
                VALUES ($1, $2)
                RETURNING *;
            `, [imageData.business_id, imageData.image_url]);

            const createdImage = result.rows[0];
            client.release();
            return createdImage;
        } catch (error) {
            console.error('Error creating image:', error);
            throw error;
        }
    }

    async updateImage(imageId, updatedImageData) {
        try {
            const client = await this.pool.connect();
            const result = await client.query(`
                UPDATE Images
                SET business_id = $1, image_url = $2
                WHERE image_id = $3
                RETURNING *;
            `, [updatedImageData.business_id, updatedImageData.image_url, imageId]);

            const updatedImage = result.rows[0];
            client.release();
            return updatedImage;
        } catch (error) {
            console.error('Error updating image:', error);
            throw error;
        }
    }
}

module.exports = imagesServices;