// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * A javascript module to handle calendar ajax actions.
 *
 * @module     core_calendar/calendar_repository
 * @class      repository
 * @package    core_calendar
 * @copyright  2017 Simey Lameze <lameze@moodle.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
define(['jquery', 'core/ajax'], function($, Ajax) {


    /**
     * Get a calendar event by id.
     *
     * @method getEventById
     * @param {int} eventId The event id.
     * @return {promise} Resolved with requested calendar event
     */
    var getEventById = function(eventId) {

        var request = {
            methodname: 'core_calendar_get_calendar_event_by_id',
            args: {
                eventid: eventId
            }
        };

        return Ajax.call([request])[0];
    };

    return {
        getEventById: getEventById
    };
});