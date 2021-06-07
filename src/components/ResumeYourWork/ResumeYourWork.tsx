import React, { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { IState } from '../../redux/reducers';
import { ICommentsReducer } from '../../redux/reducers/commentsReducers';

import Icon from '../Icon/Icon';
import Icons from '../Icon/Icons.enum';
import Search from '../Search/Search';
import Comments from '../Comments/Comments';
import Pagination from '../Pagination/Pagination';
import { ISingleComment } from '../../redux/entities/comments';
import { fontSize } from '../../styledHelpers/FontSizes';
import { IUsersReducer } from '../../redux/reducers/usersReducers';
import { IPostsReducer } from '../../redux/reducers/postsReducers';

const Wrapper = styled.section`
   width: 100%;
   margin-top: 20px;
   margin-bottom: 40px;
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

const Select = styled.select`
   background-color: transparent;
   border: none;
   font-size: ${fontSize[16]};
   font-weight: 700;
   padding-right: 10px;
`;

export interface ResumeYourWorkProps {}

const ResumeYourWork: React.FC<ResumeYourWorkProps> = () => {
   const [currentPage, setCurrentPage] = useState(1);
   const [commentsPerPage] = useState(20);
   const [phrase, setPhrase] = useState('');
   const [currentComments, setCurrentComments] = useState<ISingleComment[]>();
   const [isPagination, setIsPagination] = useState(true);

   const { comments, usersList, posts } = useSelector<
      IState,
      ICommentsReducer & IUsersReducer & IPostsReducer
   >((globalState) => ({
      ...globalState.comments,
      ...globalState.users,
      ...globalState.posts,
   }));

   const indexOfLastPost = currentPage * commentsPerPage;
   const indexOfFirstPost = indexOfLastPost - commentsPerPage;

   useEffect(() => {
      setCurrentComments(comments.slice(indexOfFirstPost, indexOfLastPost));
   }, [comments, indexOfFirstPost, indexOfLastPost]);

   useEffect(() => {
      if (phrase.length === 0) {
         setCurrentComments(comments.slice(indexOfFirstPost, indexOfLastPost));
         setIsPagination(true);
         return;
      }

      if (phrase.length > 2) {
         setIsPagination(false);
         const x = [];
         for (let i = 0; i < comments.length; i++) {
            if (comments[i].name.toLowerCase().includes(phrase.toLowerCase())) {
               x.push(comments[i]);
               setCurrentComments(x);
            }
         }
      }
   }, [phrase, currentPage, comments, indexOfLastPost, indexOfFirstPost]);

   const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

   const nextPage = () => {
      if (Math.ceil(comments.length / commentsPerPage) <= currentPage) return;
      setCurrentPage(currentPage + 1);
   };
   const prevPage = () => {
      if (currentPage <= 1) return;
      setCurrentPage(currentPage - 1);
   };

   const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
      const userinput = e.target.value;
      setPhrase(userinput);
   };

   const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
      if (e.target.value === 'all') {
         setCurrentComments(comments.slice(indexOfFirstPost, indexOfLastPost));
         setIsPagination(true);
      } else if (e.target.value === 'followed') {
         setIsPagination(false);
         const followedPosts = posts.filter((post) => post.userId === usersList[5].id);
         let x: any = [];
         followedPosts.forEach((post) => {
            const tmp = comments.filter((com) => (com.postId = post.id));
            x = [...x, ...tmp];
         });
         setCurrentComments(x);
         console.log('not implemented');
      }
   };

   return (
      <Wrapper>
         <Header>
            <SectionHeader>Resume Your Work</SectionHeader>
            <HeaderRight>
               <Search
                  value={phrase}
                  onChange={onChangeInput}
                  width="200px"
                  placeholder="Filter by title..."
               />
               <Followed>
                  <Icon width="16px" height="16px" imgSrc={Icons.cog} />
                  <Select onChange={onChangeSelect}>
                     <option value="all">All</option>
                     <option value="followed">Followed</option>
                  </Select>
               </Followed>
            </HeaderRight>
         </Header>
         {currentComments && <Comments comments={currentComments} />}
         {isPagination && (
            <Pagination
               perPage={commentsPerPage}
               curPage={currentPage}
               total={comments.length}
               paginate={paginate}
               next={nextPage}
               prev={prevPage}
            />
         )}
      </Wrapper>
   );
};

export default ResumeYourWork;
