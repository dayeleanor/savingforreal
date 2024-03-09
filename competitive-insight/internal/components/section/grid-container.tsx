import React from "react";
import { isValidString, merge } from "../../../utils";
import styles from "./index.module.scss";

export interface IGridContainerProps {
  /**
   * Defaults to 1 column
   */
  columns?: number;
  children: React.ReactNode | React.ReactNode[];
  className?: string | boolean;
}

export const GridContainer: React.FC<IGridContainerProps> = ({
  children,
  columns = 1,
  className,
}) => {
  if (React.Children.toArray(children).length <= 1 || columns === 1) {
    if (isValidString(className)) {
      return <div className={merge([styles.singleColumn, className])}>{children}</div>;
    }

    return <div className={styles.singleColumn}>{children}</div>;
  }

  return (
    <div className={merge([styles.grid, styles[`col${columns}`], className])}>
      {children}
    </div>
  );
};
