import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
}); 

test('should set text filter', () => {
    const text = 'text filter in';
    const action = setTextFilter("text filter in");
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('should set text filter with default', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should sort by amount', () => {  
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    });
});

test('should sort by date', () => {  
    // const action = sortByDate();
    // expect(action).toEqual({
    //     type: 'SORT_BY_DATE',
    // });
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});