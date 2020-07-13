import React from "react";

const Alert = ({ mode, level, headingId, children }) => (
  <React.Fragment>
    {mode === "live" ? (
      <React.Fragment>
        {level === "info" ? (
          <React.Fragment>
            {headingId ? (
              <React.Fragment>
                <div
                  aria-atomic="true"
                  aria-labelledby={headingId}
                  aria-live="polite"
                  role="note"
                >
                  {children ? (
                    <React.Fragment>
                      <div className="g-alert g-alert--info">
                        {children !== undefined ? (
                          children
                        ) : (
                          <React.Fragment>
                            {" "}
                            Example alert content{" "}
                          </React.Fragment>
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
            {!headingId ? (
              <React.Fragment>
                <div role="note">
                  {children ? (
                    <React.Fragment>
                      <div className="g-alert g-alert--info">
                        {children !== undefined ? (
                          children
                        ) : (
                          <React.Fragment>
                            {" "}
                            Example alert content{" "}
                          </React.Fragment>
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
    ) : (
      ""
    )}

    {mode === "live" ? (
      <React.Fragment>
        {level === "warning" ? (
          <React.Fragment>
            {headingId ? (
              <React.Fragment>
                <div
                  aria-atomic="true"
                  aria-labelledby={headingId}
                  aria-live="polite"
                  role="note"
                >
                  {children ? (
                    <React.Fragment>
                      <div className="g-alert g-alert--warning">
                        {children !== undefined ? (
                          children
                        ) : (
                          <React.Fragment>
                            {" "}
                            Example alert content{" "}
                          </React.Fragment>
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
            {!headingId ? (
              <React.Fragment>
                <div aria-atomic="true" aria-live="polite" role="note">
                  {children ? (
                    <React.Fragment>
                      <div className="g-alert g-alert--warning">
                        {children !== undefined ? (
                          children
                        ) : (
                          <React.Fragment>
                            {" "}
                            Example alert content{" "}
                          </React.Fragment>
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
    ) : (
      ""
    )}

    {mode === "live" ? (
      <React.Fragment>
        {level === "success" ? (
          <React.Fragment>
            {headingId ? (
              <React.Fragment>
                <div
                  aria-atomic="true"
                  aria-labelledby={headingId}
                  aria-live="polite"
                  role="note"
                >
                  {children ? (
                    <React.Fragment>
                      <div className="g-alert g-alert--success">
                        {children !== undefined ? (
                          children
                        ) : (
                          <React.Fragment>
                            {" "}
                            Example alert content{" "}
                          </React.Fragment>
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
            {!headingId ? (
              <React.Fragment>
                <div aria-atomic="true" aria-live="polite" role="note">
                  {children ? (
                    <React.Fragment>
                      <div className="g-alert g-alert--success">
                        {children !== undefined ? (
                          children
                        ) : (
                          <React.Fragment>
                            {" "}
                            Example alert content{" "}
                          </React.Fragment>
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
    ) : (
      ""
    )}

    {mode === "live" ? (
      <React.Fragment>
        {level === "error" ? (
          <React.Fragment>
            {headingId ? (
              <React.Fragment>
                <div
                  aria-atomic="true"
                  aria-labelledby={headingId}
                  aria-live="polite"
                  role="note"
                >
                  {children ? (
                    <React.Fragment>
                      <div className="g-alert g-alert--error">
                        {children !== undefined ? (
                          children
                        ) : (
                          <React.Fragment>
                            {" "}
                            Example alert content{" "}
                          </React.Fragment>
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
            {!headingId ? (
              <React.Fragment>
                <div aria-atomic="true" aria-live="polite" role="note">
                  {children ? (
                    <React.Fragment>
                      <div className="g-alert g-alert--error">
                        {children !== undefined ? (
                          children
                        ) : (
                          <React.Fragment>
                            {" "}
                            Example alert content{" "}
                          </React.Fragment>
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
    ) : (
      ""
    )}

    {mode !== "live" ? (
      <React.Fragment>
        {level === "info" ? (
          <React.Fragment>
            {headingId ? (
              <React.Fragment>
                <div aria-labelledby={headingId} role="note">
                  {children ? (
                    <React.Fragment>
                      <div className="g-alert g-alert--info">
                        {children !== undefined ? (
                          children
                        ) : (
                          <React.Fragment>
                            {" "}
                            Example alert content{" "}
                          </React.Fragment>
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
            {!headingId ? (
              <React.Fragment>
                <div role="note">
                  {children ? (
                    <React.Fragment>
                      <div className="g-alert g-alert--info">
                        {children !== undefined ? (
                          children
                        ) : (
                          <React.Fragment>
                            {" "}
                            Example alert content{" "}
                          </React.Fragment>
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
    ) : (
      ""
    )}

    {mode !== "live" ? (
      <React.Fragment>
        {level === "warning" ? (
          <React.Fragment>
            {headingId ? (
              <React.Fragment>
                <div aria-labelledby={headingId} role="note">
                  {children ? (
                    <React.Fragment>
                      <div className="g-alert g-alert--warning">
                        {children !== undefined ? (
                          children
                        ) : (
                          <React.Fragment>
                            {" "}
                            Example alert content{" "}
                          </React.Fragment>
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
            {!headingId ? (
              <React.Fragment>
                <div role="note">
                  {children ? (
                    <React.Fragment>
                      <div className="g-alert g-alert--warning">
                        {children !== undefined ? (
                          children
                        ) : (
                          <React.Fragment>
                            {" "}
                            Example alert content{" "}
                          </React.Fragment>
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
    ) : (
      ""
    )}

    {mode !== "live" ? (
      <React.Fragment>
        {level === "success" ? (
          <React.Fragment>
            {headingId ? (
              <React.Fragment>
                <div aria-labelledby={headingId} role="note">
                  {children ? (
                    <React.Fragment>
                      <div className="g-alert g-alert--success">
                        {children !== undefined ? (
                          children
                        ) : (
                          <React.Fragment>
                            {" "}
                            Example alert content{" "}
                          </React.Fragment>
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
            {!headingId ? (
              <React.Fragment>
                <div role="note">
                  {children ? (
                    <React.Fragment>
                      <div className="g-alert g-alert--success">
                        {children !== undefined ? (
                          children
                        ) : (
                          <React.Fragment>
                            {" "}
                            Example alert content{" "}
                          </React.Fragment>
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
    ) : (
      ""
    )}

    {mode !== "live" ? (
      <React.Fragment>
        {level === "error" ? (
          <React.Fragment>
            {headingId ? (
              <React.Fragment>
                <div aria-labelledby={headingId} role="note">
                  {children ? (
                    <React.Fragment>
                      <div className="g-alert g-alert--error">
                        {children !== undefined ? (
                          children
                        ) : (
                          <React.Fragment>
                            {" "}
                            Example alert content{" "}
                          </React.Fragment>
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
            {!headingId ? (
              <React.Fragment>
                <div role="note">
                  {children ? (
                    <React.Fragment>
                      <div className="g-alert g-alert--error">
                        {children !== undefined ? (
                          children
                        ) : (
                          <React.Fragment>
                            {" "}
                            Example alert content{" "}
                          </React.Fragment>
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
    ) : (
      ""
    )}
  </React.Fragment>
);

export default Alert;
