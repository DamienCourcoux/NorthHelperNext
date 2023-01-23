import mongoose, { Schema, models, model } from 'mongoose';

const packSchema = new Schema({
    name: String,
    services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Services' }]
})

const Packs = models.pack || model('pack', packSchema);

export default Packs;