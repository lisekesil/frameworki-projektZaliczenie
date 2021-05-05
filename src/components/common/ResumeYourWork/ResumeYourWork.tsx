import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { IState } from '../../../redux/reducers';
import { ICommentsReducer } from '../../../redux/reducers/commentsReducers';

import Icon from '../Icon/Icon';
import Icons from '../Icon/Icons.enum';
import Search from '../Search/Search';
import Comments from '../Comments/Comments';
import Pagination from '../Pagination/Pagination';

const Wrapper = styled.section`
   width: 100%;
   margin-top: 20px;
`;

const Header = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const HeaderRight = styled.div`
   display: flex;
`;

const SectionHeader = styled.h2`
   margin: 20px 10px 10px;
   font-weight: 700;
`;

const Followed = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   width: 125px;
`;

export interface ResumeYourWorkProps {}

const ResumeYourWork: React.FC<ResumeYourWorkProps> = () => {
   const [currentPage, setCurrentPage] = useState(1);
   const [commentsPerPage, setCommentsPerPage] = useState(15);

   const { comments } = useSelector<IState, ICommentsReducer>((globalState) => ({
      ...globalState.comments,
   }));

   const indexOfLastPost = currentPage * commentsPerPage;
   const indexOfFirstPost = indexOfLastPost - commentsPerPage;
   const currentComments = comments.slice(indexOfFirstPost, indexOfLastPost);

   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

   return (
      <Wrapper>
         <Header>
            <SectionHeader>Resume Your Work</SectionHeader>
            <HeaderRight>
               <Search width="200px" placeholder="Filter by title..." />
               <Followed>
                  <Icon width="16px" height="16px" imgSrc={Icons.cog} />
                  Followed
                  <Icon width="10px" height="10px" imgSrc={Icons.arrowDown} />
               </Followed>
            </HeaderRight>
         </Header>
         <Comments comments={currentComments} />
         {/* {comments && comments.map((com) => <Comment title={com.name} body={com.body} />)} */}
         <Pagination perPage={commentsPerPage} total={comments.length} paginate={paginate} />
      </Wrapper>
   );
};

export default ResumeYourWork;
