import Music from '../models/music.js'


export async function createMusic(req, res){
    try {
        const music = new Music(req.body)
        await music.save();
        res.status(201).json(music)
    }catch(error){
        console.error(error)
        res.status(500).json({ message: 'Error creating music'})
    }
};

export async function getMusics(req, res) {
    try {
        const musics = await Music.find().exec()
        res.json(musics)
    }catch(erro) {
        console.error(erro)
        res.status(500).json({ message: 'Error getting musics '})
    }
};

export async function getMusicByID (req, res) {
    try {
      const music = await Music.findById(req.params.id).exec();
      if (!music) {
        res.status(404).json({ message: 'music not found' });
      } else {
        res.json(music);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching music' });
    }
};

export async function updateMusic (req, res){
    try {
      const music = await Music.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
      if (!music) {
        res.status(404).json({ message: 'music not found' });
      } else {
        res.json(music);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error updating music' });
    }
};

export async function deleteMusic (req, res)  {
    try {
      await Music.findByIdAndDelete(req.params.id).exec();
      res.status(204).json({ message: 'music deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error deleting music' });
    }
  };