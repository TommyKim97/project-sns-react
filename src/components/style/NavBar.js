import styled from "styled-components";
import homeImage from "../../assets/image/icon-home.png";
import homeSelectImage from "../../assets/image/icon-home-fill.png"
import searchImage from "../../assets/image/icon-search.png";
import searchSelectImage from "../../assets/image/icon-search-fill.png";
import postImage from "../../assets/image/icon-post.png";
import profileImage from "../../assets/image/icon-user.png";
import profileSelectImage from "../../assets/image/icon-user-fill.png";

const TabMenuUl = styled.ul`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #dbdbdb;
  padding: 1.4rem 2.8rem 0.6rem;
`

const TabMenuLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  line-height: 1.4;
  color: ${(props) => props.theme.darkLightColor};
`
const SelectP = styled.p`
  color: ${(props) => props.theme.primaryColor};
`

export default function NavBar({ type }) {
  return (
    <article>
      <h3 class="sr-only">탭 메뉴</h3>
      <nav>
        <TabMenuUl>
          <li>
            <TabMenuLink href="#;">
              {type === "홈" ? <img src={homeSelectImage} alt="홈으로 이동" /> : <img src={homeImage} alt="홈으로 이동" />}
              {type === "홈" ? <SelectP>홈</SelectP> : <p>홈</p>}
            </TabMenuLink>
          </li>
          <li>
            <TabMenuLink href="#;">
              {type === "검색" ? <img src={searchSelectImage} alt="검색으로 이동" /> : <img src={searchImage} alt="검색으로 이동" />}
              {type === "검색" ? <SelectP>검색</SelectP> : <p>검색</p>}
            </TabMenuLink>
          </li>
          <li>
            <TabMenuLink href="#;">
              {type === "게시물" ? <img src={postImage} alt="게시물 작성으로 이동" /> : <img src={postImage} alt="게시물 작성으로 이동" />}
              <p>게시물 작성</p>
            </TabMenuLink>
          </li>
          <li>
            <TabMenuLink href="#;">
              {type === "프로필" ? <img src={profileSelectImage} alt="프로필로 이동" /> : <img src={profileImage} alt="프로필로 이동" />}
              {type === "프로필" ? <SelectP>프로필</SelectP> : <p>프로필</p>}
            </TabMenuLink>
          </li>
        </TabMenuUl>
      </nav>
    </article>
  );
}
