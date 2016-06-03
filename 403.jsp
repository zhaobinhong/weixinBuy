<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:set var="BasePath" value="<%=request.getContextPath()%>"></c:set>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
<link rel="stylesheet" type="text/css"
	href="${BasePath }/static/views/jquery-easyui-1.4.1/themes/default/easyui.css">
<link rel="stylesheet" type="text/css"
	href="${BasePath }/static/views/jquery-easyui-1.4.1/themes/icon.css">
<link rel="stylesheet" type="text/css"
	href="${BasePath }/static/views/jquery-easyui-1.4.1/themes/color.css">
<link rel="stylesheet" type="text/css"
	href="${BasePath }/static/views/jquery-easyui-1.4.1/demo/demo.css">
<script type="text/javascript"
	src="${BasePath }/static/views/jquery-easyui-1.4.1/jquery.min.js"></script>
<script type="text/javascript"
	src="${BasePath }/static/views/jquery-easyui-1.4.1/jquery.easyui.min.js"></script>
<script type="text/javascript"
	src="${BasePath }/static/views/jquery-easyui-1.4.1/locale/easyui-lang-zh_CN.js"></script>
</head>
<body>
	<h1 style="text-align:center;">您暂时没有访问此模块的权限，如果需要访问此模块，请向超级管理员线下申请。</h1>
</body>
</html>