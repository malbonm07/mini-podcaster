import PathNames from './PathNames';
import HomeView from '../views/home/HomeView';
import PodcastDetailsView from '../views/podcast/PodcastDetailsView';
import EpisodesView from '../views/podcast/episode/EpisodesView';
import EpisodeDetailsView from '../views/podcast/episode/EpisodeDetailsView';

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
];

export default Routes;