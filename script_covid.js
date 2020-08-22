function change(time) {
    var r = time.match(/^\s*([0-9]+)\s*-\s*([0-9]+)\s*-\s*([0-9]+)(.*)$/);
    return r[2]+"-"+r[3]+"-"+r[1]+r[4];
}

function getNow(){
	$.ajax({
		url:'https://data.covid19.go.id/public/api/update.json',
		type:'get',
		success:function(result){
			var harian=result.update.harian;
			var positif=result.update.total.jumlah_positif;
			var dirawat=result.update.total.jumlah_dirawat;
			var sembuh=result.update.total.jumlah_sembuh;
			var kematian=result.update.total.jumlah_meninggal;
			var tambahpositif=result.update.penambahan.jumlah_positif;
			var tambahdirawat=result.update.penambahan.jumlah_dirawat;
			var tambahsembuh=result.update.penambahan.jumlah_sembuh;
			var tambahkematian=result.update.penambahan.jumlah_meninggal;
			var arr=[tambahpositif,tambahdirawat,tambahsembuh,tambahkematian];
			var fa=[];
			for(i=0;i<arr.length;i++){
				if(arr[i]>=0){
					fa[i]='<i class="fa fa-chevron-circle-up"></i>';
				}else{
					fa[i]='<i class="fa fa-chevron-circle-down"></i>';
				}	
			}
				
			$('.card-body').html(`
				<ul class="list-group">
					<li class="list-group-item">Jumlah POSITIF		:<b> `+Number(positif).toLocaleString("id-ID")+`</b>  <sub><span class="badge badge-primary badge-pill">`+fa[0]+` `+tambahpositif+`</span></sub></li>
					<li class="list-group-item">Jumlah Dirawat		:<b> `+Number(dirawat).toLocaleString("id-ID")+`</b> <sub><span class="badge badge-primary badge-pill">`+fa[1]+` `+tambahdirawat+`</span></sub></li>
					<li class="list-group-item">Jumlah SEMBUH		:<b> `+Number(sembuh).toLocaleString("id-ID")+`</b> <sub><span class="badge badge-primary badge-pill">`+fa[2]+` `+tambahsembuh+`</span></sub></li>
					<li class="list-group-item">Jumlah Meninggal	:<b> `+Number(kematian).toLocaleString("id-ID")+`</b> <sub><span class="badge badge-primary badge-pill">`+fa[3]+` `+tambahkematian+`</span></sub></li>
					<li class="list-group-item">Presentase kematian	:<b> `+Math.round(kematian/positif*100)+`%</b></li>
				</ul>
			`)
			$('.card-footer').html(`
				Diupdate pada tanggal <b>`+change(result.update.penambahan.created)+`</b>
			`)
		},
		error:function(){
			$('.card-header').html('FAILED. CORS BLOCKED');
			$('.card-body').html(` Please Install extension CORS unblock below: <br> 
			<a href="https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc" target="_blank">for Chrome</a><br>
			<a href="https://microsoftedge.microsoft.com/addons/detail/cors-unblock/hkjklmhkbkdhlgnnfbbcihcajofmjgbh?hl=en-US%3Fhl%3Den-US" target="_blank">for Microsoft Edge</a><br>			
			<a href="https://addons.mozilla.org/en-US/firefox/addon/moesif-origin-cors-changer1/" target="_blank">for Mozilla Firefox</a><br>
			or other similiar extension
			`);
			$('.card-footer').html('Refresh this page if your extension is on');
		}
	});	
}

function getNowAgain(){
	$('#list').html(`
		<div class="card text-center border-primary ">
		<div class="card-header">
		DATA TOTAL
		</div>
		<div class="card-body">
			Loading...
		</div>
		<div class="card-footer">
		Tanggal di Update
		</div>
		</div>
	`)
	
	$.ajax({
		url:'https://data.covid19.go.id/public/api/update.json',
		type:'get',
		success:function(result){
			var positif=result.update.total.jumlah_positif;
			var dirawat=result.update.total.jumlah_dirawat;
			var sembuh=result.update.total.jumlah_sembuh;
			var kematian=result.update.total.jumlah_meninggal;
			var tambahpositif=result.update.penambahan.jumlah_positif;
			var tambahdirawat=result.update.penambahan.jumlah_dirawat;
			var tambahsembuh=result.update.penambahan.jumlah_sembuh;
			var tambahkematian=result.update.penambahan.jumlah_meninggal;
			var arr=[tambahpositif,tambahdirawat,tambahsembuh,tambahkematian];
			var fa=[];
			for(i=0;i<arr.length;i++){
				if(arr[i]>=0){
					fa[i]='<i class="fa fa-chevron-circle-up"></i>';
				}else{
					fa[i]='<i class="fa fa-chevron-circle-down"></i>';
				}	
			}
				
			$('.card-body').html(`
				<ul class="list-group">
					<li class="list-group-item">Jumlah POSITIF		:<b> `+Number(positif).toLocaleString("id-ID")+`</b>  <sub><span class="badge badge-primary badge-pill">`+fa[0]+` `+tambahpositif+`</span></sub></li>
					<li class="list-group-item">Jumlah Dirawat		:<b> `+Number(dirawat).toLocaleString("id-ID")+`</b> <sub><span class="badge badge-primary badge-pill">`+fa[1]+` `+tambahdirawat+`</span></sub></li>
					<li class="list-group-item">Jumlah SEMBUH		:<b> `+Number(sembuh).toLocaleString("id-ID")+`</b> <sub><span class="badge badge-primary badge-pill">`+fa[2]+` `+tambahsembuh+`</span></sub></li>
					<li class="list-group-item">Jumlah Meninggal	:<b> `+Number(kematian).toLocaleString("id-ID")+`</b> <sub><span class="badge badge-primary badge-pill">`+fa[3]+` `+tambahkematian+`</span></sub></li>
					<li class="list-group-item">Presentase kematian	:<b> `+Math.round(kematian/positif*100)+`%</b></li>
				</ul>
			`)
			$('.card-footer').html(`
				Diupdate pada tanggal <b>`+change(result.update.penambahan.created)+`</b>
			`)
		},
		error:function(){
			$('.card-header').html('FAILED. CORS BLOCKED');
			$('.card-body').html(` Please Install extension CORS unblock below: <br> 
			<a href="https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc" target="_blank">for Chrome</a><br>
			<a href="https://microsoftedge.microsoft.com/addons/detail/cors-unblock/hkjklmhkbkdhlgnnfbbcihcajofmjgbh?hl=en-US%3Fhl%3Den-US" target="_blank">for Microsoft Edge</a><br>			
			<a href="https://addons.mozilla.org/en-US/firefox/addon/moesif-origin-cors-changer1/" target="_blank">for Mozilla Firefox</a><br>
			or other similiar extension
			`);
			$('.card-footer').html('Refresh this page if your extension is on');
		}
	});	
}

function getByMonth(){
	
	$('#list').html(`
	<form>
	<div class="input-group mb-4">
    <select class="form-control" id="form">
      <option value="1">Januari</option>
      <option value="2">Februari</option>
      <option value="3">Maret</option>
      <option value="4">April</option>
      <option value="5">Mei</option>
	  <option value="6">Juni</option>
	  <option value="7">Juli</option>
	  <option value="8">Agustus</option>
	  <option value="9">September</option>
	  <option value="10">Oktober</option>
	  <option value="11">November</option>
	  <option value="12">Desember</option>
    </select>
	 <div class="input-group-append" id="button-addon4">
    <button class="btn btn-outline-secondary harian" type="button">Harian</button>
    <button class="btn btn-outline-secondary kumulatif" type="button">Kumulatif</button>
  </div>
  </div>
	</form>
	
	<table class="table table-hover text-center" id="table">
	 <thead>
		<tr>
		  <th scope="col">Tanggal</th>
		  <th scope="col" class="nonkum">Positif</th>
		  <th scope="col" class="kum" hidden>Positif (Kumulatif)</th>
		  <th scope="col" class="nonkum">Dirawat</th>
		  <th scope="col" class="kum" hidden>Dirawat (Kumulatif)</th>
		  <th scope="col" class="nonkum">Sembuh</th>
		  <th scope="col" class="kum" hidden>Sembuh (Kumulatif)</th>
		  <th scope="col" class="nonkum">Meninggal</th>
		  <th scope="col" class="kum" hidden>Meninggal (Kumulatif)</th>
		</tr>
	 </thead>
	 <tbody class="tablebody">
	 <tr>
	 <td>
	 Loading...
	 </td>
	 </tr>
	 </tbody>
	</table>
	`)
	
	var monthNow= new Date().getMonth()+1;
	$('.form-control option[value="'+ monthNow+'"]').attr("selected", "selected");
	
	$.ajax({
		url:'https://data.covid19.go.id/public/api/update.json',
		type:'get',
		success:function(result){
			var harian=result.update.harian;
			let content='';
			harian.sort().reverse();
			$.each(harian,function(i,data){
			var d= new Date(data.key_as_string);
			if((d.getUTCMonth()+1)== monthNow){
			content+=`
				<tr>
					<th>`+ d.getUTCDate() +`/`+ (d.getUTCMonth()+1) +`/`+ d.getUTCFullYear() +`</th>
					<td class="nonkum">`+data.jumlah_positif.value+`</td>
					<td class="kum" hidden>`+data.jumlah_positif_kum.value+`</td>
					<td class="nonkum">`+data.jumlah_dirawat.value+`</td>
					<td class="kum" hidden>`+data.jumlah_dirawat_kum.value+`</td>
					<td class="nonkum">`+data.jumlah_sembuh.value+`</td>
					<td class="kum" hidden>`+data.jumlah_sembuh_kum.value+`</td>
					<td class="nonkum">`+data.jumlah_meninggal.value+`</td>
					<td class="kum" hidden>`+data.jumlah_meninggal_kum.value+`</td>
				</tr>
			`;	
			}
			});
			
			$('.tablebody').html(content);
		},
		error:function(){
			$('.tablebody').html('Failed . CORS Blocked');
		}
	});
}

$(document).ready(function(){
	getNow();
});

$('.nav-link').on('click',function(){
	$('.nav-link').removeClass('active');
	$(this).addClass('active');
	
	let teks= $(this).html();
	
	
	$('#list').html('Loading...');
	
	if(teks=='Now'){
		getNowAgain();
	return;
	}
	if(teks=='By Month'){
		getByMonth();
	return;
	}
 
});

$('#list').on('click','.kumulatif',function(){
	let kum = document.querySelectorAll('.kum');
	let nonkum = document.querySelectorAll('.nonkum'); 
	for(var i=0;i<kum.length;i++){
		kum[i].removeAttribute("hidden");
		nonkum[i].setAttribute("hidden", "hidden");
	}
});

$('#list').on('click','.harian',function(){
	let kum = document.querySelectorAll('.kum');
	let nonkum = document.querySelectorAll('.nonkum'); 
	for(var i=0;i<nonkum.length;i++){
		nonkum[i].removeAttribute("hidden");
		kum[i].setAttribute("hidden", "hidden");
	}
});

$('#list').on('change','#form',function(){
	let month=this.value;
	let old=document.querySelector('#form option[selected="selected"]');
	old.removeAttribute("selected");
	$('.form-control option[value="'+ month+'"]').attr("selected", "selected");
	$('.tablebody').html(`Loading...`);
	$.ajax({
		url:'https://data.covid19.go.id/public/api/update.json',
		type:'get',
		success:function(result){
			var harian=result.update.harian;
			let content='';
			harian.sort().reverse();
			$.each(harian,function(i,data){
			var d= new Date(data.key_as_string);
			if((d.getUTCMonth()+1)== month){
			content+=`
				<tr>
					<th>`+ d.getUTCDate() +`/`+ (d.getUTCMonth()+1) +`/`+ d.getUTCFullYear() +`</th>
					<td class="nonkum">`+data.jumlah_positif.value+`</td>
					<td class="kum" hidden>`+data.jumlah_positif_kum.value+`</td>
					<td class="nonkum">`+data.jumlah_dirawat.value+`</td>
					<td class="kum" hidden>`+data.jumlah_dirawat_kum.value+`</td>
					<td class="nonkum">`+data.jumlah_sembuh.value+`</td>
					<td class="kum" hidden>`+data.jumlah_sembuh_kum.value+`</td>
					<td class="nonkum">`+data.jumlah_meninggal.value+`</td>
					<td class="kum" hidden>`+data.jumlah_meninggal_kum.value+`</td>
				</tr>
			`;	
			}
			});
			if(content !=''){
			$('.tablebody').html(content);
			}
			else{
			$('.tablebody').html('Data Tidak Ada')
			}
		}
	});
});
		