export const handleAuthInputChange = (componentObj) => (e) =>
  componentObj.setState({
    ...componentObj.state,
    [e.target.name]: e.target.value,
  });
