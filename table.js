const statsTable =
    `<style>
        table {
            font-family: "Droid Sans", Arial, sans-serif;
            border-collapse: collapse;
            width: 100%;
        }

        td, th {
            border: 1px solid #dddddd;
            padding: 8px;
        }
        
        #author {
            font-size: 22px;
        }
        
        #row2 {
            font-weight: bold;
        }
        
        #progressBar {
            width: 100%;
            background-color: #dddddd;
        }
        
        #progressBarInner {
            width: 1%;
            height: 5px;
            background-color: #008000;
        }
    </style>
    <table>
        <tr>
            <td id="author" colspan="3" align="center"><b>Author: </b></td>
        </tr>
        <tr id="row2">
            <td>Total Resources</td>
            <td>Total Downloads</td>
            <td>Total Ratings</td>
            <!--<td>Total 5-Star Ratings</td>
            <td>Average Rating</td>-->
        </tr>
        <tr>
            <td id="totalResources">loading...</td>
            <td id="totalDownloads">loading...</td>
            <td id="totalRatings">loading...</td>
            <!--<td id="total5Ratings">loading...</td>
            <td id="averageRating">loading...</td>-->
        </tr>
    </table>
    <div id="progressBar">
        <div id="progressBarInner"></div>
    </div>
    <br>`;