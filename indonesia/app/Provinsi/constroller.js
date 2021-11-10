const Provinsi = require("./model");
const fs = require("fs");
const path = require("path");

module.exports = {
  viewDetail: async (req, res) => {
    try {
      const { id } = req.params;
      let newProv = [];
      const provs = await Provinsi.findAll({ where: { id } });
      provs.map((prov) => {
        newProv.push({
          id: prov.id,
          nama: prov.nama,
          diresmikan: prov.diresmikan,
          photo: prov.photo,
          pulau: prov.pulau,
        });
      });

      res.render("provinsi/detail", {
        title: "Provinsi",
        newProv,
      });
    } catch (err) {
      console.log(err);
    }
  },
  // ADD PROVINSI ========================
  viewAddProv: async (req, res) => {
    try {
      res.render("provinsi/addprov");
    } catch (err) {
      console.log(err);
    }
  },

  actionAddProv: async (req, res) => {
    try {
      const { nama, pulau, diresmikan } = req.body;
      if (req.file) {
        // lokasi ambil foto
        let tmp_path = req.file.path;
        // ambil extensi
        let originaExt =
          req.file.originalname.split(".")[
            req.file.originalname.split(".").length - 1
          ];
        // sambungkan extensi dengan name baru
        let filename = req.file.filename + "." + originaExt;
        // simpan ke folder
        let target_path = path.resolve(`public/upload/${filename}`);

        const src = fs.createReadStream(tmp_path);
        const dest = fs.createWriteStream(target_path);

        src.pipe(dest);
        src.on("end", async () => {
          try {
            await Provinsi.create({
              nama,
              pulau,
              diresmikan,
              photo: filename,
            });
            res.redirect("/");
          } catch (err) {
            console.log(err.message);
          }
        });
      } else {
        await Provinsi.create({
          nama,
          diresmikan,
          pulau,
        });
        res.redirect("/");
      }
    } catch (err) {
      console.log(err);
    }
  },

  // EDIT ====================
  viewEditProv: async (req, res) => {
    try {
      const { id } = req.params;
      let newProvs = [];
      const provs = await Provinsi.findAll({ where: { id } });
      provs.map((prov) => {
        newProvs.push({
          id: prov.id,
          nama: prov.nama,
          diresmikan: prov.diresmikan,
          photo: prov.photo,
          pulau: prov.pulau,
        });
      });

      res.render("provinsi/editprov", {
        title: "Provinsi",
        newProvs,
      });
    } catch (err) {
      console.log(err.message);
    }
  },

  actionEditProv: async (req, res) => {
    try {
      const { id } = req.params;
      await Provinsi.update(req.body, { where: { id } });
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  },

  // DELETE ====================================
  acttionDeleteProv: async (req, res) => {
    try {
      const { id } = req.params;
      await Provinsi.destroy({ where: { id } });
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  },
};
