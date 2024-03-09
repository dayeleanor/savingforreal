import React from "react";
import { merge } from "../../../utils";
import { GridContainer } from "./grid-container";
import styles from "./index.module.scss";

export interface IStatementProps {
  children: React.ReactNode | React.ReactNode[];

  /**
   * Defaults to true
   */
  centered?: boolean;
}

export const Statement: React.FC<IStatementProps> = ({ children, centered = true }) => {
  if (React.Children.toArray(children).length <= 1) {
    return (
      <GridContainer
        columns={1}
        className={merge([styles.statement, centered && styles.center])}
      >
        {children}
      </GridContainer>
    );
  }

  return (
    <GridContainer
      columns={1}
      className={merge([styles.statement, centered && styles.center])}
    >
      <div>{children}</div>
    </GridContainer>
  );
};
