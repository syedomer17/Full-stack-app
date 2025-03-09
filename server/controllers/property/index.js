import express from "express";
import propertyModel from "../../models/Property.js";

const router = express.Router();

router.get("/getall", async (req, res) => {
  try {
    const property = await propertyModel.find({});
    res.status(200).json({ msg: property });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

router.get("/getbyid/:id", async (req, res) => {
  try {
    const property = await propertyModel.findOne({ _id: req.params.id });
    res.status(200).json({ msg: property });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

router.put("/editbyid/:id", async (req, res) => {
  try {
    await propertyModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({ msg: "property Updated Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

router.delete("/deletebyid/:id", async (req, res) => {
  try {
    await propertyModel.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: "property Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

router.delete("/deleteall", async (req, res) => {
  try {
    await propertyModel.deleteMany({});
    res.status(200).json({ msg: "All property deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

export default router;
