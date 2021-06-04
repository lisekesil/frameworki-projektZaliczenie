import Icons from '../../components/common/Icon/Icons.enum';
import { ISingleWorkspace } from '../entities/workspace';

export interface IWorkspacesReducer {
   workspaces: ISingleWorkspace[];
}

const defaultState = (): IWorkspacesReducer => ({
   workspaces: [
      { imgSrc: Icons.network, label: 'Client contract', link: 'client-contract' },
      { imgSrc: Icons.house, label: 'Supplier contract', link: 'supplier-contract' },
      { imgSrc: Icons.entities2, label: 'Corporate', link: 'corporate' },
      { imgSrc: Icons.entities, label: 'Group Norms', link: 'group-norms' },
      { imgSrc: Icons.cog, label: 'Real estate contracts', link: 'real-estate-contracts' },
   ],
});

//eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState(), action: any) => {
   return state;
};
