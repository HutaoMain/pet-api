const MedicalHistoryModel = require("../models/MedicalHistoryModel");

const createMedicalHistory = async (req, res) => {
  try {
    const medicalHistory = await MedicalHistoryModel.create(req.body);
    res.status(200).json(medicalHistory);
  } catch (err) {
    console.log(err);
  }
};

const getMedicalHistoryList = async (req, res) => {
  try {
    const medicalHistoryList = await MedicalHistoryModel.find();
    res.status(200).json(medicalHistoryList);
  } catch (err) {
    console.log(err);
  }
};

const getMedicalHistoryById = async (req, res) => {
  try {
    const medicalHistory = await MedicalHistoryModel.findById(req.params.id);
    res.status(200).json(medicalHistory);
  } catch (err) {
    console.log(err);
  }
};

const deleteMedicalHistoryById = async (req, res) => {
  try {
    const medicalHistory = await MedicalHistoryModel.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json(medicalHistory);
  } catch (err) {
    console.log(err);
  }
};

const updateMedicalHistoryById = async (req, res) => {
  try {
    const medicalHistory = await MedicalHistoryModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(medicalHistory);
  } catch (err) {
    console.log(err);
  }
};

const getMedicalHistoryListByPetId = async (req, res) => {
  try {
    const medicalHistory = await MedicalHistoryModel.find({
      petId: req.body.petId,
    });
    res.status(200).json(medicalHistory);
  } catch (err) {
    console.log(err);
  }
};

const getMonthlyAppointmentCounts = async (req, res) => {
  try {
    const appointmentCounts = await MedicalHistoryModel.aggregate([
      {
        $group: {
          _id: {
            $switch: {
              branches: [
                {
                  case: {
                    $eq: [
                      {
                        $month: {
                          $dateFromString: {
                            dateString: "$appointmentDate",
                            format: "%Y-%m-%dT%H:%M:%S.%LZ",
                          },
                        },
                      },
                      1,
                    ],
                  },
                  then: "January",
                },
                {
                  case: {
                    $eq: [
                      {
                        $month: {
                          $dateFromString: {
                            dateString: "$appointmentDate",
                            format: "%Y-%m-%dT%H:%M:%S.%LZ",
                          },
                        },
                      },
                      2,
                    ],
                  },
                  then: "February",
                },
                {
                  case: {
                    $eq: [
                      {
                        $month: {
                          $dateFromString: {
                            dateString: "$appointmentDate",
                            format: "%Y-%m-%dT%H:%M:%S.%LZ",
                          },
                        },
                      },
                      3,
                    ],
                  },
                  then: "March",
                },
                {
                  case: {
                    $eq: [
                      {
                        $month: {
                          $dateFromString: {
                            dateString: "$appointmentDate",
                            format: "%Y-%m-%dT%H:%M:%S.%LZ",
                          },
                        },
                      },
                      4,
                    ],
                  },
                  then: "April",
                },
                {
                  case: {
                    $eq: [
                      {
                        $month: {
                          $dateFromString: {
                            dateString: "$appointmentDate",
                            format: "%Y-%m-%dT%H:%M:%S.%LZ",
                          },
                        },
                      },
                      5,
                    ],
                  },
                  then: "May",
                },
                {
                  case: {
                    $eq: [
                      {
                        $month: {
                          $dateFromString: {
                            dateString: "$appointmentDate",
                            format: "%Y-%m-%dT%H:%M:%S.%LZ",
                          },
                        },
                      },
                      6,
                    ],
                  },
                  then: "June",
                },
                {
                  case: {
                    $eq: [
                      {
                        $month: {
                          $dateFromString: {
                            dateString: "$appointmentDate",
                            format: "%Y-%m-%dT%H:%M:%S.%LZ",
                          },
                        },
                      },
                      7,
                    ],
                  },
                  then: "July",
                },
                {
                  case: {
                    $eq: [
                      {
                        $month: {
                          $dateFromString: {
                            dateString: "$appointmentDate",
                            format: "%Y-%m-%dT%H:%M:%S.%LZ",
                          },
                        },
                      },
                      8,
                    ],
                  },
                  then: "August",
                },
                {
                  case: {
                    $eq: [
                      {
                        $month: {
                          $dateFromString: {
                            dateString: "$appointmentDate",
                            format: "%Y-%m-%dT%H:%M:%S.%LZ",
                          },
                        },
                      },
                      9,
                    ],
                  },
                  then: "September",
                },
                {
                  case: {
                    $eq: [
                      {
                        $month: {
                          $dateFromString: {
                            dateString: "$appointmentDate",
                            format: "%Y-%m-%dT%H:%M:%S.%LZ",
                          },
                        },
                      },
                      10,
                    ],
                  },
                  then: "October",
                },
                {
                  case: {
                    $eq: [
                      {
                        $month: {
                          $dateFromString: {
                            dateString: "$appointmentDate",
                            format: "%Y-%m-%dT%H:%M:%S.%LZ",
                          },
                        },
                      },
                      11,
                    ],
                  },
                  then: "November",
                },
                {
                  case: {
                    $eq: [
                      {
                        $month: {
                          $dateFromString: {
                            dateString: "$appointmentDate",
                            format: "%Y-%m-%dT%H:%M:%S.%LZ",
                          },
                        },
                      },
                      12,
                    ],
                  },
                  then: "December",
                },
              ],
              default: "Unknown",
            },
          },
          count: { $sum: 1 },
        },
      },
    ]);

    res.status(200).json(appointmentCounts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createMedicalHistory,
  getMedicalHistoryList,
  getMedicalHistoryById,
  deleteMedicalHistoryById,
  updateMedicalHistoryById,
  getMedicalHistoryListByPetId,
  getMonthlyAppointmentCounts,
};
