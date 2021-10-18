import axios from "axios"
import { useEffect,useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
function Select() {
    const [episode, setEpisode] = useState("");
    async function getEpisodes() {
        const episodes = await axios.get("https://rickandmortyapi.com/api/episode")
        const episodesFilter = episodes.data.results.map(episode => {
            return (
                    <p>
                      {episode.episode} {episode.name}
                    </p>
              );
        })
        setEpisode(episodesFilter)
        console.log("here")
        return episodesFilter
    };
    getEpisodes()
    return (
      <div className="Select">
          {episode}
      </div>
    );
  }

  export default Select;