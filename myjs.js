var app=angular.module("myApp", ['ngSanitize']);
app.controller('myCtrl', function($scope, $http) {
    const requestURL='https://showherda.github.io/UniMate-with-AngularJS/output.txt';
    $scope.submitButtonDisabled=true;
    $scope.costs=[];
    $scope.numEntryOptions=[10, 25, 50, 100];
    
    for (var i=5000; i<85000; i+=5000)
        $scope.costs.push(i);
    
    $http.get(requestURL).then(function (response) {
        $scope.submitButtonDisabled=false;
        /* for (let v of response.data.split(';')){
			v=v.replace('\n', '');
			let t=[], i=0, s='';
			while (i<v.length){
				if (v[i]===',')
					$scope.all[$scope.all.length-1].push(s),
					s='';
				else if (v[i]==='"'){
					let j=i+1;
					while (v[j]!=='"')
						s+=v[j++];
					t.push(s);
					i=j
				}
				else
					s+=v[i];
				i+=1
			}
			$scope.all[$scope.all.length-1].push(s);
			$scope.all.push([]);
		}
		$scope.all.pop(); */
		$scope.universityList=JSON.parse(response.data);
		console.log($scope.universityList);
        
        $scope.search = function() {
            if ($scope.ed)
                $scope.all.sort((arr) => parseFloat(arr[9])+parseFloat(arr[14])+parseFloat(arr[15])-$scope.efc+(parseFloat(arr[1])==0?1e6:-1e6));
            else
                $scope.all.sort((arr) => parseFloat(arr[9])+parseFloat(arr[14])+parseFloat(arr[15])-$scope.efc);
        }

        $scope.displayInfo = function() {
            console.log("YES");
        }
    });
});

// 0 name, 1 ed, 2 rd, 3  percent of class from ed, 4 ed to rd, 5 additional admission plans, 6 total cost of attendance
// 7 full-time ug students, 8 full time intl students, 9 intl to local percentage, 10 need-based, 11 merit, 12 no aid, 13 average finaid, 14 percentage of intl receiving aid, 15 efc