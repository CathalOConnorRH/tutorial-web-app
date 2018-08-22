import React from 'react';
import { Card, CardBody, CardFooter, CardTitle } from 'patternfly-react';
import PropTypes from 'prop-types';

const TutorialCard = props => {
  return (
    <Card matchHeight>
      <CardTitle>
        <div className="app-tutorial-card-rectangle" />
        <div> {props.title} </div>
      </CardTitle>
      <CardBody> {props.children} </CardBody>
      <CardFooter className="app-tutorial-card-pf-footer">
        <a className="app-tutorial-card-get-started-btn" href="#">
          Get Started
        </a>
        <a className="app-tutorial-card-learn-more-link" href={props.learnMoreLink}>
          Learn More
        </a>
      </CardFooter>
    </Card>
  );
};

TutorialCard.propTypes = {
  /** Content rendered inside the tutorial card  */
  children: PropTypes.node.isRequired,
  /** Title of the tutorial */
  title: PropTypes.string.isRequired,
  /** Link to page that explains the the tutorial in more detail */
  learnMoreLink: PropTypes.string.isRequired
};

export default TutorialCard;
