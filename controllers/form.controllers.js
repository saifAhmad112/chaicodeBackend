const Form = require("../models/form/form.modules");

exports.create = async (req, res) => {
  try {
    const { firstName, lastName, email, number } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !number) {
      return res.status(400).json({
        errorcode: 1,
        status: false,
        message: "Please fill all the fields",
        data: null,
      });
    }

    // Create a new Form instance
    const form = new Form({
      firstName,
      lastName,
      email,
      number,
    });

    // Save the form to the database
    await form.save();

    // Respond with success
    return res.status(200).json({
      errorcode: 0,
      status: true,
      message: "Form added successfully",
      data: form,
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

exports.getAll = async (req, res) => {
  try {
    let getData = await Form.find({})
      .sort({
        // let getData=await Form.find({}).select("lastName email").sort({
        createdAt: -1,
      })
      .lean();
    const totalData = await Form.countDocuments({});
    return res.status(200).json({
      errorcode: 0,
      status: true,
      message: "Data fetched successfully",
      data: getData,
      length: getData.length,
      total: totalData,
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

exports.editForm = async (req, res) => {
  try {
    console.log("Request Body:", req.body); // Add this line
    let { id, firstName, lastName, email, number } = req.body;
    if (!id) {
      return res.status(207).json({
        errorcode: 1,
        status: false,
        message: "Id Should Be Present s",
        data:req.body,
      });
    }
    let editForm = await Form.findById({ _id: id });
    if (!editForm)
      return res.status(404).json({
        errorcode: 2,
        status: false,
        message: "Form Not Found",
        data: null,
      });
    editForm.firstName = firstName ? firstName : editForm.firstName;
    editForm.lastName = lastName ? lastName : editForm.lastName;
    editForm.email = email ? email : editForm.email;
    editForm.number = number ? number : editForm.number;

    await editForm.save();

    return res.status(200).json({
      errorcode: 0,
      status: false,
      message: "Form Edit Successfully",
      data: editForm,
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

exports.deleteForm = async (req, res) => {
  try {
    let { id } = req.params;
    if (!id) {
      return res.status(404).json({
        errorcode: 1,
        status: false,
        messsage: "Id shoud Be Present",
        data: null,
      });
    }
    let form = await Form.findById({ _id: id });
    if (!form) {
      return res.status(207).json({
        errorcode: 2,
        status: false,
        message: "Form Is Not Found",
        data: null,
      });
    }
    await Form.deleteOne({ _id: id });
    return res.status(200).json({
      errorcode: 0,
      status: true,
      message: "Form Deleted Successfully",
      data: null,
    });
  } catch (error) {
    return res.status(200).json({
      errorcode: 5,
      status: false,
      message: error.message,
      data: error,
    });
  }
};
