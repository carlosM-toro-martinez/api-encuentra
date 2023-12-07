const pool = require('../libs/Conection.js');

class imagesServices {
    constructor() {
        this.sesion = {};
        this.pool = pool;
        this.pool.on('error', (err) => {
            console.log(err);
        });
    }

    async getImagesByBusinessId(businessId) {
        try {
            const client = await this.pool.connect();
            const result = await client.query(`
            SELECT *
            FROM Images
            WHERE business_id = $1;
          `, [businessId]);

            const images = result.rows;
            client.release();
            return images;
        } catch (error) {
            console.error('Error retrieving images by business_id:', error);
            throw error;
        }
    }

    async getRandomImages() {
        try {
            const client = await this.pool.connect();
            const result = await client.query(`
            SELECT *
            FROM Images
            ORDER BY random()
            LIMIT 5;
          `);

            const randomImages = result.rows;
            client.release();
            return randomImages;
        } catch (error) {
            console.error('Error retrieving random images:', error);
            throw error;
        }
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