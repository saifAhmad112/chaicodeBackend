const AgainForm = require("../models/againForm/againForm.modules");
const Form = require("../models/form/form.modules");

exports.create = async (req, res) => {
  try {
    const { title, lastName, email, number, enumArrray } = req.body;

    // Validate required fields
    if (!title || !lastName || !email || !number || !enumArrray) {
      return res.status(400).json({
        errorcode: 1,
        status: false,
        message: "Please fill all the fields",
        data: null,
      });
    }

    // Create a new Form instance
    const againform = new AgainForm({
      title,
      lastName,
      email,
      number,
      enumArrray,
      
    });

    // Save the form to the database
    await againform.save();

    // Respond with success
    return res.status(200).json({
      errorcode: 0,
      status: true,
      message: "Form added successfully",
      data:againform,
    });
  } catch (error) {
    // Handle errors
    return res.status(500).json({
      errorcode: 5,
      status: false,
      message: error.message,
      data: null,
    });
  }
};

exports.againGetAll = async (req, res) => {
  try {
    // let getData=await Form.find({}).select("lastName email").sort({
      let getData = await AgainForm.find({})
      .populate({ path: "other", select: "firstName lastName email" }) // Specify fields to populate
      .sort({ createdAt: -1 })
      .lean();    
    const totalData = await AgainForm.countDocuments({});
    const againData = await Form.countDocuments({});
    return res.status(200).json({
      errorcode: 0,
      status: true,
      message: "Data fetched successfully",
      data: getData,
      length: getData.length,
      formLength: totalData,
      againformLength: againData,
    });
  } catch (error) {
    return res.status(500).json({
      errorcode: 5,
      status: false,
      message: error.message,
      data: error,
    });
  }
};
