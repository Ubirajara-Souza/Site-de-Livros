import { books } from "./DiceLastReleases";
import { Title } from "../title";
import styled from "styled-components";
import CardsRecommends from "../cardsRecommends";
import imageBook from "../../images/book2.png";

const LastReleasesContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NewBooksContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

function LastReleases() {
  return (
    <LastReleasesContainer>
      <Title color="#eb9b00" fontSize="36px">
        ÚLTIMOS LANÇAMENTOS
      </Title>
      <NewBooksContainer>
        {books.map((book) => (
          <img src={book.src} alt="book" />
        ))}
      </NewBooksContainer>
      <CardsRecommends
        title="Talvez você se interesse por"
        subTitle="Angular 11"
        description="Construindo uma aplicação com a plataforma Google"
        image={imageBook}
      />
    </LastReleasesContainer>
  );
}

export default LastReleases;
