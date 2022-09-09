import { Button, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import cn from 'classnames';
import { FC } from 'react';
import { theme, colors } from 'theme';

interface IProps {
  name: string;
  route: string;
  isVerticalMenu?: boolean;
}

const useStyles = makeStyles({
  actionButton: {
    color: colors.primary.main,
    backgroundColor: colors.primary.main,
    border: `solid 1px ${colors.primary.main}`,
    borderRadius: 0,
    marginRight: 0,
    marginLeft: theme.spacing(2.5),
  },
  fullWidth: {
    width: '100%',
  },
  verticalMenu: {
    width: '100%',
    marginTop: theme.spacing(1),
    marginLeft: 0,
  },
});

const NavActionButton: FC<IProps> = (props) => {
  const { name, route, isVerticalMenu } = props;
  const classes = useStyles();

  return (
    <Link
      className={cn({
        [classes.fullWidth]: isVerticalMenu,
      })}
      underline="none"
      href={route}
    >
      <Button
        className={cn({
          [classes.verticalMenu]: isVerticalMenu,
          [classes.actionButton]: true,
        })}
        variant="outlined"
      >
        {name}
      </Button>
    </Link>
  );
};

export default NavActionButton;
