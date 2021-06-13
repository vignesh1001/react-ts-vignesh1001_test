import {
  Button,
  FormControl,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  AppBar,
  Button,
  FormControl,
  MenuItem,
  Select,
  Tab,
  Tabs,
  Box,
  Typography
} from '@material-ui/core';
import clsx from 'clsx';

function SecuritySetTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`security-settings-simple-tabpanel-${index}`}
      aria-labelledby={`security-settings-simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yPropsSecuritySettings(index) {
  return {
    id: `security-settings-simple-tab-${index}`,
    'aria-controls': `security-settings-simple-tabpanel-${index}`
  };
}

function SecuritySettings({ classes }) {
  const [securitySettings, setSecuritySettings] = React.useState({
    YFReceivePrivateMessage: {
      value: 'default',
      validation: false,
      show: false,
      isError: false,
      errorMsg: 'Receive private messages cannot be blank.'
    },
    YFCreatePost: {
      value: 'default',
      validation: false,
      show: false,
      isError: false,
      errorMsg: 'Create post cannot be blank.'
    },
    YFViewYourAboutPage: {
      value: 'default',
      validation: false,
      show: false,
      isError: false,
      errorMsg: 'View your about page cannot be blank.'
    },
    OUReceivePrivateMessage: {
      value: 'default',
      validation: false,
      show: false,
      isError: false,
      errorMsg: 'Receive private messages cannot be blank.'
    },
    OUCreatePost: {
      value: 'default',
      validation: false,
      show: false,
      isError: false,
      errorMsg: 'Create post cannot be blank.'
    },
    OUViewYourAboutPage: {
      value: 'default',
      validation: false,
      show: false,
      isError: false,
      errorMsg: 'View your about page cannot be blank.'
    },
    NRUCreatePost: {
      value: 'default',
      validation: false,
      show: false,
      isError: false,
      errorMsg: 'Create post cannot be blank.'
    },
    NRUViewYourAboutPage: {
      value: 'default',
      validation: false,
      show: false,
      isError: false,
      errorMsg: 'View your about page cannot be blank.'
    }
  });
  const [securitySettingsValue, setSecuritySettingsValue] = React.useState(1);

  const handleChangeSecuritySettings = prop => event => {
    let Obj = securitySettings[prop];
    if (event.target.type == 'checkbox') {
      Obj['value'] = event.target.checked;
    } else {
      Obj['value'] = event.target.value;
    }
    setSecuritySettings({ ...securitySettings, [prop]: Obj });
  };

  const handleSecuritySettingsSubmit = () => event => {
    console.log(securitySettings);
  };

  const handleChangeSecuritySet = (event, newValue) => {
    setSecuritySettingsValue(newValue);
  };

  return (
    <>
      <div className={classes.panelHeading}>
        <strong>Security</strong> Settings
      </div>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={securitySettingsValue}
            onChange={handleChangeSecuritySet}
            aria-label="simple tabs example"
          >
            <Tab label="Your friends" {...a11yPropsSecuritySettings(0)} />
            <Tab label="Other users" {...a11yPropsSecuritySettings(1)} />
            <Tab
              label="Not registered users"
              {...a11yPropsSecuritySettings(1)}
            />
          </Tabs>
        </AppBar>
        <SecuritySetTabPanel value={securitySettingsValue} index={0}>
          <div className={classes.tableNotifcRoot}>
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row" align="left">
                        <strong>Receive private messages </strong>
                        {'  '}
                        <span className="badge">MAIL</span> <br /> Allow others
                        to send you private messages
                      </TableCell>
                      <TableCell align="right">
                        <Select
                          labelId="filled-age-native-simple"
                          id="filled-age-native-simple"
                          value={securitySettings.YFReceivePrivateMessage.value}
                          onChange={handleChangeSecuritySettings(
                            'YFReceivePrivateMessage'
                          )}
                        >
                          <MenuItem value={'default'}>Default - Allow</MenuItem>
                          <MenuItem value={'0'}>Deny</MenuItem>
                          <MenuItem value={'1'}>Allow</MenuItem>
                        </Select>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row" align="left">
                        <strong>Create post</strong>
                        {'  '}
                        <span className="badge">Post</span> <br /> Allow others
                        to create new posts on your profile page
                      </TableCell>
                      <TableCell align="right">
                        <Select
                          labelId="filled-age-native-simple"
                          id="filled-age-native-simple"
                          value={securitySettings.YFCreatePost.value}
                          onChange={handleChangeSecuritySettings(
                            'YFCreatePost'
                          )}
                        >
                          <MenuItem value={'default'}>Default - Allow</MenuItem>
                          <MenuItem value={'0'}>Deny</MenuItem>
                          <MenuItem value={'1'}>Allow</MenuItem>
                        </Select>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row" align="left">
                        <strong>View your about page</strong>
                        {'  '}
                        <span className="badge">USER</span> <br /> Allows access
                        to your about page with personal information
                      </TableCell>
                      <TableCell align="right">
                        <Select
                          labelId="filled-age-native-simple"
                          id="filled-age-native-simple"
                          value={securitySettings.YFViewYourAboutPage.value}
                          onChange={handleChangeSecuritySettings(
                            'YFViewYourAboutPage'
                          )}
                        >
                          <MenuItem value={'default'}>Default - Allow</MenuItem>
                          <MenuItem value={'0'}>Deny</MenuItem>
                          <MenuItem value={'1'}>Allow</MenuItem>
                        </Select>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </FormControl>
          </div>
        </SecuritySetTabPanel>
        <SecuritySetTabPanel value={securitySettingsValue} index={1}>
          <div className={classes.tableNotifcRoot}>
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row" align="left">
                        <strong>Receive private messages</strong>
                        {'  '}
                        <span className="badge">MAIL</span> <br /> Allow others
                        to send you private messages
                      </TableCell>
                      <TableCell align="right">
                        <Select
                          labelId="filled-age-native-simple"
                          id="filled-age-native-simple"
                          value={securitySettings.OUReceivePrivateMessage.value}
                          onChange={handleChangeSecuritySettings(
                            'OUReceivePrivateMessage'
                          )}
                        >
                          <MenuItem value={'default'}>Default - Allow</MenuItem>
                          <MenuItem value={'0'}>Deny</MenuItem>
                          <MenuItem value={'1'}>Allow</MenuItem>
                        </Select>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row" align="left">
                        <strong>Create post</strong>
                        {'  '}
                        <span className="badge">Post</span> <br /> Allow others
                        to create new posts on your profile page
                      </TableCell>
                      <TableCell align="right">
                        <Select
                          labelId="filled-age-native-simple"
                          id="filled-age-native-simple"
                          value={securitySettings.OUCreatePost.value}
                          onChange={handleChangeSecuritySettings(
                            'OUCreatePost'
                          )}
                        >
                          <MenuItem value={'default'}>Default - Allow</MenuItem>
                          <MenuItem value={'0'}>Deny</MenuItem>
                          <MenuItem value={'1'}>Allow</MenuItem>
                        </Select>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row" align="left">
                        <strong>View your about page</strong>
                        {'  '}
                        <span className="badge">USER</span> <br /> Allows access
                        to your about page with personal information
                      </TableCell>
                      <TableCell align="right">
                        <Select
                          labelId="filled-age-native-simple"
                          id="filled-age-native-simple"
                          value={securitySettings.OUViewYourAboutPage.value}
                          onChange={handleChangeSecuritySettings(
                            'OUViewYourAboutPage'
                          )}
                        >
                          <MenuItem value={'default'}>Default - Allow</MenuItem>
                          <MenuItem value={'0'}>Deny</MenuItem>
                          <MenuItem value={'1'}>Allow</MenuItem>
                        </Select>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </FormControl>
          </div>
        </SecuritySetTabPanel>
        <SecuritySetTabPanel value={securitySettingsValue} index={2}>
          <div className={classes.tableNotifcRoot}>
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row" align="left">
                        <strong>Create post</strong>
                        {'  '}
                        <span className="badge">Post</span> <br /> Allow others
                        to create new posts on your profile page
                      </TableCell>
                      <TableCell align="right">
                        <Select
                          labelId="filled-age-native-simple"
                          id="filled-age-native-simple"
                          value={securitySettings.NRUCreatePost.value}
                          onChange={handleChangeSecuritySettings(
                            'NRUCreatePost'
                          )}
                        >
                          <MenuItem value={'default'}>Default - Deny</MenuItem>
                          <MenuItem value={'0'}>Deny</MenuItem>
                          <MenuItem value={'1'}>Allow</MenuItem>
                        </Select>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row" align="left">
                        <strong>View your about page</strong>
                        {'  '}
                        <span className="badge">USER</span> <br /> Allows access
                        to your about page with personal information
                      </TableCell>
                      <TableCell align="right">
                        <Select
                          labelId="filled-age-native-simple"
                          id="filled-age-native-simple"
                          value={securitySettings.NRUViewYourAboutPage.value}
                          onChange={handleChangeSecuritySettings(
                            'NRUViewYourAboutPage'
                          )}
                        >
                          <MenuItem value={'default'}>Default - Deny</MenuItem>
                          <MenuItem value={'0'}>Deny</MenuItem>
                          <MenuItem value={'1'}>Allow</MenuItem>
                        </Select>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </FormControl>
          </div>
        </SecuritySetTabPanel>
        <FormControl className={clsx(classes.margin, classes.textField)}>
          {' '}
          <Button
            className={classes.buttonPrimary}
            variant="contained"
            onClick={handleSecuritySettingsSubmit()}
          >
            Save
          </Button>
        </FormControl>
      </div>
    </>
  );
}

export default SecuritySettings;
