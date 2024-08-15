/*
This script checks the part number scanned by the user.
The part number should either be the UPC (12 digits long) 
or the EAN (13 digits long) of the product. If the scanned
part number is neither of these, the script displays an
error message and prompts the user to rescan the barcode.
This is simillar to the serial_check.js script, but with
different length and format requirements.

8-15-2024
*/

function onScan(event) {
    // Check the length of the scanned data
    const length = event.data.length;

    // Check if the scanned data is < 12 or > 13 characters long
    if (length < 12 || length > 13) {
        Device.beep(2000, 1000, 50);
        View.toast("Invalid part number length. Please rescan.");
        event.data = "";
    }
    
    else if (length === 12) {
        Device.beep(50, 50, 50);
        View.toast("UPC number scanned.");
    }
    
        else if (length === 13) {
            Device.beep(50, 50, 50);
            View.toast("EAN number scanned.");
        }

    else {
        Device.beep(2000, 1000, 50);
        View.toast("Invalid part number format. Please rescan.");
        event.data = "";
    }
}

// Register the onScan function to handle scan events
WLEvent.on("Scan", onScan);