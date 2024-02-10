import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Menu as BaseMenu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem } from "@mui/base/MenuItem";
import { Dropdown } from "@mui/base/Dropdown";
import { useTheme } from "@mui/system";
import { useSelector } from "react-redux";
import { getTheme } from "../slices/themeSlice";

function useIsDarkMode() {
  const theme = useTheme();
  return theme.palette.mode === "dark";
}

export default function DropdownButton({ onMenuClick }) {
  // Replace this with your app logic for determining dark mode

  const handleMenuClick = (value) => {
    onMenuClick(value);
  };

  return (
    <Dropdown>
      <MenuButton>Đỗ Mạnh Thường</MenuButton>
      <Menu>
        <MenuItem onClick={() => handleMenuClick(1)}>Cài đặt</MenuItem>
        <MenuItem onClick={() => handleMenuClick(2)}>Đăng xuất</MenuItem>
      </Menu>
    </Dropdown>
  );
}

const resolveSlotProps = (fn, args) =>
  typeof fn === "function" ? fn(args) : fn;

const Menu = React.forwardRef((props, ref) => {
  // Replace this with your app logic for determining dark modes
  const isDarkMode = useIsDarkMode();

  return (
    <BaseMenu
      ref={ref}
      {...props}
      slotProps={{
        ...props.slotProps,
        root: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.root,
            ownerState
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              `${isDarkMode ? "dark" : ""} z-10`,
              resolvedSlotProps?.className
            ),
          };
        },
        listbox: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.listbox,
            ownerState
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              "text-sm box-border font-sans p-1.5 my-3 mx-0 rounded-xl overflow-auto outline-0 bg-white dark:bg-slate-900 border border-solid border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-300 min-w-listbox shadow-md dark:shadow-slate-900",
              resolvedSlotProps?.className
            ),
          };
        },
      }}
    />
  );
});

Menu.propTypes = {
  /**
   * The props used for each slot inside the Menu.
   * @default {}
   */
  slotProps: PropTypes.shape({
    listbox: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  }),
};

const MenuButton = React.forwardRef((props, ref) => {
  const { className, ...other } = props;
  return (
    <BaseMenuButton
      ref={ref}
      className={clsx(
        "cursor-pointer text-sm font-sans box-border font-semibold px-4 py-2 dark:text-slate-900 text-slate-200 ",
        className
      )}
      {...other}
    />
  );
});

MenuButton.propTypes = {
  /**
   * Class name applied to the root element.
   */
  className: PropTypes.string,
};

const MenuItem = React.forwardRef((props, ref) => {
  const { className, ...other } = props;
  return (
    <BaseMenuItem
      ref={ref}
      className={clsx(
        "list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus:shadow-outline-purple focus:outline-0 focus:bg-slate-100 focus:dark:bg-slate-800 focus:text-slate-900 focus:dark:text-slate-300 disabled:text-slate-400 disabled:dark:text-slate-700 disabled:hover:text-slate-400 disabled:hover:dark:text-slate-700",
        className
      )}
      {...other}
    />
  );
});

MenuItem.propTypes = {
  className: PropTypes.string,
};
