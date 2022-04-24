import PathNames from './PathNames';
import HomeView from '../views/home/HomeView';
import PodcastDetailsView from '../views/podcast/PodcastDetailsView';
import EpisodesView from '../views/podcast/episode/EpisodesView';
import EpisodeDetailsView from '../views/podcast/episode/EpisodeDetailsView';
import { Navigate } from 'react-router-dom'

const Routes = [
    {
        path: PathNames.HOME,
        element: <HomeView/>,
    },
    {
        path: PathNames.PODCAST_DETAILS,
        element: <PodcastDetailsView />,
        children: [
            {
                index: true,
                element: <EpisodesView />
            },
            {
                path: PathNames.EPISODE_DETAILS,
                element: <EpisodeDetailsView />,
            }
        ],
    },
    {
        path: PathNames.NOTFOUND,
        element: <Navigate to="/"/>
    }
];

export default Routes;