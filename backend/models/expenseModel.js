import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        pattern: /^[a-zA-Z0-9 ]*$/,
    },
    description : {
        type: String,
        required: true,
        pattern: /^[a-zA-Z0-9 ]*$/,
    },
    category: {
        type: String,
        required: true,
        enum: ["Food", "Household", "Social Life", "Transportation", "Health", "Miscellaneous"], 
    },
    amount: {
        type: Number,
        required: true,
        min: 0,
    },
    date: {
        type: Date,
        required: true,
    },
});

const Expense = mongoose.model("Expense", expenseSchema);
export default Expense;

