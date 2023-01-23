import mongoose, { Schema, models, model } from 'mongoose';

const serviceSchema = new Schema({
    name: String,
    example: String,
    price: Number,
    priceDetails: String,
    packsId: { type: mongoose.Schema.Types.ObjectId, ref: 'Packs' }
})

const Services = models.service || model('service', serviceSchema);

export default Services;