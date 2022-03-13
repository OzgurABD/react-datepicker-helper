import moment from "moment";
import _ from "lodash";

export const SelectedValue = (date) => {

    if (!_.isNil(date) && date._isAMomentObject) // or moment.isMoment(date)
        return moment(date).toDate();

    return !_.isNil(date) && !_.isNaN(Date.parse(date)) ? new Date(date) : '';
}

export const SelectValue = (date) => {

    if (!_.isNil(date) && date._isAMomentObject)
        return moment(date).format('YYYY-MM-DD');

    return !_.isNil(date) && (date instanceof Date) ? moment(date).format('YYYY-MM-DD') : null;
}