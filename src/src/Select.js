import axios from "axios"
import { useEffect,useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
function Select() {
    const [episode, setEpisode] = useState([]);
    useEffect(async () => {
        getEpisodes()
      },[]);
    async function getEpisodes() {
        const episodes = await axios.get("https://rickandmortyapi.com/api/episode")
        const episodesFilter = episodes.data.results.map((episode,index) => {
            return { episode : episode.episode, name : episode.name, id: index}
        })
        setEpisode(episodesFilter)
        console.log(episode)
    };

    const columns = [
        {field: 'episode', headerName: 'episode',width: 150},
         {field: 'name', headerName: 'Name'}
    ]
    return (
        <div style={{ height: 400, width: '100%' }}>
         <DataGrid
         
  rows={episode}
  columns={columns}
  pageSize={5}
  rowsPerPageOptions={[5]}
  checkboxSelection
/>
      </div>
    );
  }

  export default Select;