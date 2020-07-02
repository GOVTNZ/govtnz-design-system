import React from "react";

type Props = {
  mode?: "live";
  level: "info" | "warning" | "success" | "error";
  children?: React.ReactNode;
  headingId?: string;
};

const constants = {
  level: {
    info: "g-alert--info",
    warning: "g-alert--warning",
    success: "g-alert--success",
    error: "g-alert--error"
  }
};

const Alert = ({ mode, level, children, headingId }: Props) => (
  <React.Fragment>
    {mode === "live" ? (
      <React.Fragment>
        {level === "info" ? (
          <React.Fragment>
            <div aria-atomic="true" aria-live="polite" role="note">
              {children !== undefined ? (
                <React.Fragment>
                  <div
                    className={`g-alert${
                      constants.level[level] !== undefined
                        ? " " + constants.level[level]
                        : ""
                    }`}
                  >
                    {children !== undefined ? (
                      children
                    ) : (
                      <React.Fragment> Example alert content </React.Fragment>
                    )}
                  </div>
                </React.Fragment>
              ) : (
                ""
              )}
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
      </React.Fragment>
    ) : (
      ""
    )}

    {mode === "live" ? (
      <React.Fragment>
        {level === "warning" ? (
          <React.Fragment>
            <div aria-atomic="true" aria-live="polite" role="note">
              {children !== undefined ? (
                <React.Fragment>
                  <div
                    className={`g-alert${
                      constants.level[level] !== undefined
                        ? " " + constants.level[level]
                        : ""
                    }`}
                  >
                    {children !== undefined ? (
                      children
                    ) : (
                      <React.Fragment> Example alert content </React.Fragment>
                    )}
                  </div>
                </React.Fragment>
              ) : (
                ""
              )}
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
      </React.Fragment>
    ) : (
      ""
    )}

    {mode === "live" ? (
      <React.Fragment>
        {level === "success" ? (
          <React.Fragment>
            <div aria-atomic="true" aria-live="polite" role="note">
              {children !== undefined ? (
                <React.Fragment>
                  <div
                    className={`g-alert${
                      constants.level[level] !== undefined
                        ? " " + constants.level[level]
                        : ""
                    }`}
                  >
                    {children !== undefined ? (
                      children
                    ) : (
                      <React.Fragment> Example alert content </React.Fragment>
                    )}
                  </div>
                </React.Fragment>
              ) : (
                ""
              )}
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
      </React.Fragment>
    ) : (
      ""
    )}

    {mode === "live" ? (
      <React.Fragment>
        {level === "error" ? (
          <React.Fragment>
            <div aria-atomic="true" aria-live="polite" role="note">
              {children !== undefined ? (
                <React.Fragment>
                  <div
                    className={`g-alert${
                      constants.level[level] !== undefined
                        ? " " + constants.level[level]
                        : ""
                    }`}
                  >
                    {children !== undefined ? (
                      children
                    ) : (
                      <React.Fragment> Example alert content </React.Fragment>
                    )}
                  </div>
                </React.Fragment>
              ) : (
                ""
              )}
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
      </React.Fragment>
    ) : (
      ""
    )}

    {mode !== "live" ? (
      <React.Fragment>
        {level === "info" ? (
          <React.Fragment>
            <div aria-labelledby={headingId} role="note">
              {children !== undefined ? (
                <React.Fragment>
                  <div
                    className={`g-alert${
                      constants.level[level] !== undefined
                        ? " " + constants.level[level]
                        : ""
                    }`}
                  >
                    {children !== undefined ? (
                      children
                    ) : (
                      <React.Fragment> Example alert content </React.Fragment>
                    )}
                  </div>
                </React.Fragment>
              ) : (
                ""
              )}
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
      </React.Fragment>
    ) : (
      ""
    )}

    {mode !== "live" ? (
      <React.Fragment>
        {level === "warning" ? (
          <React.Fragment>
            <div aria-labelledby={headingId} role="note">
              {children !== undefined ? (
                <React.Fragment>
                  <div
                    className={`g-alert${
                      constants.level[level] !== undefined
                        ? " " + constants.level[level]
                        : ""
                    }`}
                  >
                    {children !== undefined ? (
                      children
                    ) : (
                      <React.Fragment> Example alert content </React.Fragment>
                    )}
                  </div>
                </React.Fragment>
              ) : (
                ""
              )}
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
      </React.Fragment>
    ) : (
      ""
    )}

    {mode !== "live" ? (
      <React.Fragment>
        {level === "success" ? (
          <React.Fragment>
            <div aria-labelledby={headingId} role="note" tabIndex={-1}>
              {children !== undefined ? (
                <React.Fragment>
                  <div
                    className={`g-alert${
                      constants.level[level] !== undefined
                        ? " " + constants.level[level]
                        : ""
                    }`}
                  >
                    {children !== undefined ? (
                      children
                    ) : (
                      <React.Fragment> Example alert content </React.Fragment>
                    )}
                  </div>
                </React.Fragment>
              ) : (
                ""
              )}
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
      </React.Fragment>
    ) : (
      ""
    )}

    {mode !== "live" ? (
      <React.Fragment>
        {level === "error" ? (
          <React.Fragment>
            <div aria-labelledby={headingId} role="note" tabIndex={-1}>
              {children !== undefined ? (
                <React.Fragment>
                  <div
                    className={`g-alert${
                      constants.level[level] !== undefined
                        ? " " + constants.level[level]
                        : ""
                    }`}
                  >
                    {children !== undefined ? (
                      children
                    ) : (
                      <React.Fragment> Example alert content </React.Fragment>
                    )}
                  </div>
                </React.Fragment>
              ) : (
                ""
              )}
            </div>
          </React.Fragment>
        ) : (
          ""
        )}
      </React.Fragment>
    ) : (
      ""
    )}
  </React.Fragment>
);

export default Alert;
