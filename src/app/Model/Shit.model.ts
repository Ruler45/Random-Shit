import { Schema, model,models } from 'mongoose';

interface IShit {
    title: string;
    description: string;
    link: string;
}

const shitSchema = new Schema<IShit>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    link: {
        type: String,
        required: true,
    }
});

const Shit = models.Shit<IShit> || model<IShit>('Shit', shitSchema);

export default Shit;