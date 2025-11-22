import mongoose from "mongoose";

// 1- Create a schema
// 2-model based off of that schema

const noteChema = new mongoose.Schema(
    {
        title: {
            type : String,
            required: true
        },
        content: {
            type : String,
            required: true
        },
    }, 
    { timestamps: true,} //CreatedAt, UpdatedAt
);



const Note = mongoose.model("Note", noteChema);

export default Note;
