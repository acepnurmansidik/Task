const Provinsi = require("../Provinsi/model");
const Kabupaten = require("../Kabupaten/model");

module.exports = {
  viewIndex: async (req, res) => {
    try {
      let newProvs = [];
      const provs = await Provinsi.findAll();
      provs.map((prov) => {
        newProvs.push({
          id: prov.id,
          nama: prov.nama,
          diresmikan: prov.diresmikan,
          photo: prov.photo,
          pulau: prov.pulau,
        });
      });

      res.render("index", {
        title: "Provinsi",
        newProvs,
      });
    } catch (err) {
      console.log(err.message);
    }
  },
  viewSearch: async (req, res) => {
    try {
      const { search } = req.body;

      if (search === "Kabupaten") {
        let newProvs = [];
        const provs = await Kabupaten.findAll();
        provs.map((prov) => {
          newProvs.push({
            id: prov.id,
            nama: prov.nama,
            diresmikan: prov.diresmikan,
            photo: prov.photo,
          });
        });

        res.render("kabupaten/viewKab", {
          title: "Kabupaten",
          newProvs,
        });
      } else {
        res.redirect("/");
      }
    } catch (err) {
      console.log(err.message);
    }
  },
};
