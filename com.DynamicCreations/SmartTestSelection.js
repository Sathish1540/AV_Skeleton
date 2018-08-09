/*
This helps to find the tests what need run post a deployement
Assume a scenario:
- in development project we have 2 files : ovationTix.html,thetermani.html (two pages are same applications)
- commit happend on ovationtix.html
- Assume that we have a list of cases which are linked with this artifact, with us QA manager /dev team helped us to make this table
- once the succesful deply happend, the test run job is started (manully/on CI) then intelligence will read the table mentiond in abe with file name and ge the list of cases
- with that list the execution will tart after making the dynamic config/spec file in side the workspace
- Selected tests = [Total Smoke/Reg tests] - [file attached tests, found above]
 */
