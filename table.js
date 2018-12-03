const statsTable =
    `<style type="text/css">
        #authorStatsTable {
            font-family: "Droid Sans", Arial, sans-serif;
            width: 100%;
        }
        
        #authorStatsTable tr:first-child {
            background-image: linear-gradient(#f4a03c, #f38918);
            text-shadow: 2px 2px #bfbfbf;
            color: #FFFFFF;
        } 
        
        #authorStatsTable tr:nth-child(even) {
            background: #CCCCCC;
            font-weight: bold;
        }

        #authorStatsTable td, th {
            border: 1px solid #dddddd;
            padding: 8px;
        }
        
        #author {
            font-size: 26px;
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
    <table id="authorStatsTable">
        <tr>
            <td id="author" colspan="7" align="center"><b></b></td>
        </tr>
        <tr>
            <td>Total Resources</td>
            <td>Total Downloads</td>
            <td>Normal Downloads</td>
            <td>Premium Downloads</td>
            <td>Download Ratio</td>
            <td>Total Ratings</td>
            <td>Average Rating</td>
        </tr>
        <tr>
            <td id="totalResources">loading...</td>
            <td id="totalDownloads">loading...</td>
            <td id="normalDownloads">loading...</td>
            <td id="premiumDownloads">loading...</td>
            <td id="downloadRatio">loading...</td>
            <td id="totalRatings">loading...</td>
            <td id="averageRating">loading...</td>
        </tr>
    </table>
    <div id="progressBar">
        <div id="progressBarInner"></div>
    </div>
    <br>`;