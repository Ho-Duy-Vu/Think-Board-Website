import express from 'express';
import { createNotes, getAllNotes, updateNote, deleteNote, getNoteById } from '../controller/notesController.js';
    
const router = express.Router();

//remote api/notes  => localhost:5000/api/notes

// lay tat ca notes
router.get("/", getAllNotes);
// lay note theo id
router.get("/:id", getNoteById);
// tao note moi
router.post("/", createNotes);
// cap nhat note theo id
router.put("/:id", updateNote);
// xoa note theo id
router.delete("/:id", deleteNote);

export default router;