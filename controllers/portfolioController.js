const sendEmailController = (req, res) => {
  try {
    return res.status(200).send({
      success: true,
      message: "Your Message Sent Successfully."
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ success: false, message: "Send Email API Error", error });
  }
};

module.exports = { sendEmailController };
