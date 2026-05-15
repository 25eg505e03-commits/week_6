// import express and model
import exp from "express";
import { EmpModel } from "../models/EmpModel.js";

// create router for employee routes
export const empRoute = exp.Router();

// create employee
empRoute.post("/employees", async (req, res, next) => {
  try {
    const newEmp = req.body;
    console.log("Received Data:", newEmp);
    const empDoc = new EmpModel(newEmp);
    await empDoc.save();
    res.status(201).json({
      message: "Emp created",
    });
  } catch (err) {
    next(err);
  }
});

// get all employees
empRoute.get("/employees", async (req, res) => {
  let empList = await EmpModel.find();
  res.status(200).json({ message: "list of emps", payload: empList });
});

// update employee
empRoute.put("/employees/:id", async (req, res) => {
  const modifiedEmp = req.body;
  //find and update
  let updatedEmp = await EmpModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: { ...modifiedEmp },
    },
    { returnDocument: "after" },
  );
  if (!updatedEmp) {
    return res.status(404).json({ message: "emp not found" });
  }
  res.status(200).json({ message: "employee updated", payload: updatedEmp });
});

// delete employee
empRoute.delete("/employees/:id", async (req, res) => {
  let deletedEmp = await EmpModel.findByIdAndDelete(req.params.id);
  if (!deletedEmp) {
    return res.status(404).json({ message: "emp not found" });
  }
  res.status(200).json({ message: "employee deleted", payload: deletedEmp });
});
