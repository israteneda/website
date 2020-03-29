import { graphql } from "gatsby";
import Lesson from "../components/lesson";

export default Lesson;

export const query = graphql`
  query LessonQuery($id: String) {
    lesson(id: { eq: $id }) {
      id
      title
      description
      video
      body
    }
  }
`;
