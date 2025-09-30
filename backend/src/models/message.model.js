import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: String, // clerkId
        required: true,
    },
    receiverId: {
        type: String, // clearkId
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export const Message = mongoose.model("Message", messageSchema);