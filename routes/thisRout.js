const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const router = express.Router();
const mongoose = require("mongoose");
const { type } = require("os");

//login signup part start
//data base

const dbURL =
	"mongodb+srv://collegedb:collegedb123@cluster0.yubriwt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//schema
const userSchema = mongoose.Schema({
	name: {
		type: String,
	},
	number: {
		type: Number,
	},
	email: {
		type: String,
	},
	password: {
		type: String,
	},
});

//model
//model
const userModel = mongoose.model("userdatas", userSchema);

async function run() {
	try {
		const dboption = {
			dbName: "newStdata",
		};
		await mongoose.connect(dbURL, dboption);
		console.log("Connected to MongoDB");
	} catch (err) {
		console.error("Error connecting to MongoDB:", err.message);
	}
}

//fetch data
const getAllData = async () => {
	let res = await userModel.find();
	return res;
};

router.get("/login", (req, res) => {
	res.render("login");
});

router.get("/signup", (req, res) => {
	res.render("signup");
});

router.get("/forgot", (req, res) => {
	res.render("forgot", { data: "" });
});

router.post("/login", (req, res) => {
	const { userEmail, userPassword } = req.body;
	getAllData().then((data) => {
		const userExits = data.find((ele) => {
			return ele.email == userEmail && ele.password == userPassword;
		});
		if (userExits) {
			res.render("services");
		} else {
			res.redirect("/signup");
		}
	});
});
router.post("/signup", async (req, res) => {
	const { name, number, userEmail, userPassword } = req.body;
	let userCheck;
	try {
		userCheck = await userModel.findOne({ email: userEmail });
	} catch (err) {
		console.log(err);
		res.status(500).send("Server error");
	}
	if (userCheck) {
		res.send("User already registered");
	} else {
		const createDoc = new userModel({
			name: name,
			number: number,
			email: userEmail,
			password: userPassword,
		});
		try {
			await createDoc.save();
			res.redirect("/login");
		} catch (err) {
			console.log(err);
			res.status(500).send("Server error");
		}
	}
});

router.post("/forgot", async (req, res) => {
	const { userEmail, confirmPassword, newPassword } = req.body;
	let data = "";
	if (newPassword != confirmPassword) {
		data = "Password not matched!";
		res.render("forgot", { data: data });
	} else {
		let userCheck = await userModel.find({ email: userEmail });
		if (userCheck.length == 0) {
			data = "Email-id not found!";
			res.render("forgot", { data: data });
		} else {
			const result = await userModel.updateOne(
				{ email: userEmail },
				{ $set: { password: newPassword } }
			);
			res.redirect("/login");
		}
	}
});

run();

//login signup part start

router.get("/", (req, res) => {
	res.render("index");
});

router.get("/index", (req, res) => {
	res.render("index");
});

router.get("/collegecmp", (req, res) => {
	res.render("collegecmp");
});

router.get("/services", (req, res) => {
	// res.render('services');
	res.redirect("/login");
});

router.get("/devsupport", (req, res) => {
	res.render("devsupport");
});

///// Roadmap

router.get("/roadmap", (req, res) => {
	res.render("roadmapindex");
});

router.get("/roadmap/frontend", (req, res) => {
	res.render("frontend");
});

router.get("/roadmap/backend", (req, res) => {
	res.render("backend");
});

router.get("/roadmap/angular", (req, res) => {
	res.render("materials/angular");
});

router.get("/roadmap/android", (req, res) => {
	res.render("materials/android");
});

router.get("/roadmap/bootstrap", (req, res) => {
	res.render("materials/bootstrap");
});

router.get("/roadmap/c", (req, res) => {
	res.render("materials/c");
});

router.get("/roadmap/cpp", (req, res) => {
	res.render("materials/cpp");
});

// router.get("/csharp", (req, res) => {
//   res.render("materials/c#");
// });

router.get("/roadmap/datastructure", (req, res) => {
	res.render("materials/datastructure");
});

router.get("/roadmap/deepLearning", (req, res) => {
	res.render("materials/deepLearning");
});

router.get("/roadmap/django", (req, res) => {
	res.render("materials/django");
});

router.get("/roadmap/git", (req, res) => {
	res.render("materials/git");
});

router.get("/roadmap/htmlcss", (req, res) => {
	res.render("materials/htmlcss");
});

router.get("/roadmap/javascript", (req, res) => {
	res.render("materials/javascript");
});

router.get("/roadmap/machinelearning", (req, res) => {
	res.render("materials/machinelearning");
});

router.get("/roadmap/matlab", (req, res) => {
	res.render("materials/matlab");
});

router.get("/roadmap/mongodb", (req, res) => {
	res.render("materials/mongodb");
});

router.get("/roadmap/nodejs", (req, res) => {
	res.render("materials/nodejs");
});

// router.get("/php", (req, res) => {
//   res.render("materials/php");
// });

// router.get("/prolog", (req, res) => {
//   res.render("materials/prolog");
// });

router.get("/roadmap/python", (req, res) => {
	res.render("materials/python");
});

router.get("/roadmap/react", (req, res) => {
	res.render("materials/react");
});

router.get("/roadmap/redux", (req, res) => {
	res.render("materials/redux");
});

// router.get("/rlanguage", (req, res) => {
//   res.render("materials/rlanguage");
// });

// router.get("/ruby", (req, res) => {
//   res.render("materials/ruby");
// });

// router.get("/scala", (req, res) => {
//   res.render("scala");
// });

router.get("/roadmap/vue", (req, res) => {
	res.render("materials/vue");
});

// router.get("/webaccessibility", (req, res) => {
//   res.render("materials/webaccessibility");
// });

module.exports = router;
