import videogameModel from '../models/videogames';
export function getById(req, res, next) {
  console.log(req.body);
  videogameModel.findById(req.params.videogameId, function (err, videogameInfo) {
    if (err) {
      next(err);
    } else {
      res.json({ status: "success", message: "Videogame found!!!", data: { videogames: videogameInfo } });
    }
  });
}
export function getAll(req, res, next) {
  let videogamesList = [];
  videogameModel.find({}, function (err, videogames) {
    if (err) {
      next(err);
    } else {
      for (let videogame of videogames) {
        videogamesList.push({ id: videogame._id, name: videogame.name, released_on: videogame.released_on });
      }
      res.json({ status: "success", message: "Videogames list found!!!", data: { videogames: videogamesList } });

    }
  });
}
export function updateById(req, res, next) {
  videogameModel.findByIdAndUpdate(req.params.videogameId, { name: req.body.name }, function (err, videogameInfo) {
    if (err)
      next(err);
    else {
      res.json({ status: "success", message: "Videogame updated successfully!!!", data: null });
    }
  });
}
export function deleteById(req, res, next) {
  videogameModel.findByIdAndRemove(req.params.videogameId, function (err, videogameInfo) {
    if (err)
      next(err);
    else {
      res.json({ status: "success", message: "Videogame deleted successfully!!!", data: null });
    }
  });
}
export function create(req, res, next) {
  videogameModel.create({ name: req.body.name, released_on: req.body.released_on }, function (err, result) {
    if (err)
      next(err);

    else
      res.json({ status: "success", message: "Videogame added successfully!!!", data: null });

  });
}