import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import moment from 'moment';

// MUI
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ChatIcon from '@material-ui/icons/Chat';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles(() => ({
  root: {
    padding: '0 5px',
  },
  even: {
    background: 'rgba(0, 0, 0, 0.07)',
  },
}));

export default function Story(props) {
  const classes = useStyles();
  const { index, differentBG } = props;
  const {
    id,
    url,
    title,
    date,
    points,
    author,
    num_comments: numComments,
  } = props.HNObj;
  const regexUrl = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/gim;
  // id={item.objectID}
  // url={
  //   item._tags[0] === 'story'
  //     ? item.url
  //     : `https://news.ycombinator.com/item?id=${item.objectID}`
  // }
  // title={
  //   item._tags[0] === 'story' ? item.title : item.comment_text
  // }
  // date={moment(item.created_at).fromNow()}
  // points={item.points}
  // author={item.author}
  // comments={item.num_comments}
  // isStory={item._tags[0] === 'story'}

  return (
    <ListItem
      disableGutters
      className={differentBG ? `${classes.even} ${classes.root}` : classes.root}
    >
      {index}
      <ListItemText
        primary={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <>
            <Typography noWrap>
              <Link href={url} color="textPrimary">
                {title}
              </Link>
              <Link href={url} color="textSecondary">
                {url ? `(${url.match(regexUrl)})` : null}
              </Link>
            </Typography>
          </>
        }
        secondary={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <>
            <Link
              color="textSecondary"
              href={`https://news.ycombinator.com/item?id=${id}`}
            >
              {`${moment(date).fromNow()} - `}
            </Link>
            <Link
              color="textSecondary"
              href={`https://news.ycombinator.com/item?id=${id}`}
            >
              {points === null ? '0' : `${points}`}
              {points === 1 ? ' point - ' : ' points - '}
            </Link>
            <Link
              color="textSecondary"
              href={`https://news.ycombinator.com/user?id=${author}`}
            >
              {author}
            </Link>
            <Link
              color="textSecondary"
              href={`https://news.ycombinator.com/item?id=${id}`}
            >
              {numComments === null
                ? ' - 0 comments - '
                : ` - ${numComments} comments`}
            </Link>
          </>
        }
      />
    </ListItem>
  );
}

Story.defaultProps = {
  /*   points: null,
  comments: null, */
};

Story.propTypes = {
  /*   id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  points: PropTypes.number,
  author: PropTypes.string.isRequired,
  comments: PropTypes.number,
  isStory: PropTypes.bool.isRequired,
  differentBG: PropTypes.bool.isRequired, */
};
