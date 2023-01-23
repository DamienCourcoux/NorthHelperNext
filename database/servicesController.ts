import { NextApiRequest, NextApiResponse } from "next";
import Services from "../models/service";
import Packs from "../models/pack";

type Props = {
    req: NextApiRequest;
    res: NextApiResponse;
}

// get: http://localhost:3000/api/services
export async function getServices({ req, res }: Props) {
    try {
        const services = await Services.find({});
        if (!services) return res.status(404).json({ error: 'Data not found' });
        res.status(200).json(services);
    } catch (error) {
        res.status(404).json({ error: 'Error while fetching data' });
    }
}

// post: http://localhost:3000/api/services
export async function postService({ req, res }: Props) {
    try {
        const formData = req.body;
        if (!formData) return res.status(404).json({ error: 'Form data not provided' });
        const service = await Services.create(formData);
        const pack = await Packs.findOne({ _id: formData.packsId });
        pack.services.push(service._id);
        await pack.save();
        return res.status(200).json(service);
    } catch (error) {
        return res.status(404).json({ error });
    }
}

// put: http://localhost:3000/api/services/id
export async function putService({ req, res }: Props) {
    try {
        const { serviceId } = req.query;
        const formData = req.body;
        if (serviceId && formData) {
            const service = await Services.findByIdAndUpdate(serviceId, formData);
            const oldPack = await Packs.findOne({ services: serviceId });
            if (oldPack) {
                oldPack.services = oldPack.services.filter((id: any) => !id.equals(serviceId));
                await oldPack.save();
            }
            const newPack = await Packs.findOne({ _id: formData.packsId });
            newPack.services.push(service._id);
            await newPack.save();
            return res.status(200).json(service);
        }
        res.status(404).json({ error: 'Data not selected' });
    } catch (error) {
        res.status(404).json({ error: 'Error while updating the data' });
    }
}

// delete: http://localhost:3000/api/services/id
export async function deleteService({ req, res }: Props) {
    try {
        const { serviceId } = req.query;
        if (serviceId) {
            const service = await Services.findByIdAndDelete(serviceId);
            const oldPack = await Packs.findOne({ services: serviceId });
            if (oldPack) {
                oldPack.services = oldPack.services.filter((id: any) => !id.equals(serviceId));
                await oldPack.save();
            }
            return res.status(200).json({ deleted: serviceId });
        }
        res.status(404).json({ error: 'Data not selected' });
    } catch (error) {
        res.status(404).json({ error: 'Error while delete the data' });
    }
}

// get: http://localhost:3000/api/services/id
export async function getService({ req, res }: Props) {
    try {
        const { serviceId } = req.query;
        if (serviceId) {
            const service = await Services.findById(serviceId);
            res.status(200).json(service);
        }
        res.status(404).json({ error: 'Data not selected' });
    } catch (error) {
        res.status(404).json({ error: 'Cannot get the data' });
    }
}