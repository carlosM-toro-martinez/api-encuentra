const pool = require('../libs/Conection.js');

class promotionServices {
  constructor() {
    this.sesion = {};
    this.pool = pool;
    this.pool.on('error', (err) => {
      console.log(err);
    });
  }

  async getPromotionsByBusinessId(businessId) {
    try {
      const client = await this.pool.connect();
      const result = await client.query(`
        SELECT *
        FROM Promotions
        WHERE business_id = $1;
      `, [businessId]);

      const promotions = result.rows;
      client.release();
      return promotions;
    } catch (error) {
      console.error('Error retrieving promotions by business_id:', error);
      throw error;
    }
  }

  async createPromotion(promotionData) {
    try {
      const client = await this.pool.connect();
      const result = await client.query(`
            INSERT INTO Promotions (business_id, promotion_details, price)
            VALUES ($1, $2, $3)
            RETURNING *;
        `, [promotionData.business_id, promotionData.promotion_details, promotionData.price]);

      const createdPromotion = result.rows[0];
      client.release();
      return createdPromotion;
    } catch (error) {
      console.error('Error creating promotion:', error);
      throw error;
    }
  }

  async updatePromotion(promotionId, updatedPromotionData) {
    try {
      const client = await this.pool.connect();
      const result = await client.query(`
            UPDATE Promotions
            SET business_id = $1, promotion_details = $2
            WHERE promotion_id = $3
            RETURNING *;
        `, [updatedPromotionData.business_id, updatedPromotionData.promotion_details, promotionId]);

      const updatedPromotion = result.rows[0];
      client.release();
      return updatedPromotion;
    } catch (error) {
      console.error('Error updating promotion:', error);
      throw error;
    }
  }
}

module.exports = promotionServices;
