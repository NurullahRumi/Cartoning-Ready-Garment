/*Copyright (c) 2016-2017 cmt.mu All Rights Reserved.
 This software is the confidential and proprietary information of cmt.mu You shall not disclose such Confidential Information and shall use it only in accordance
 with the terms of the source code license agreement you entered into with cmt.mu*/
package com.mu.cmt.pfs.pfsdb.controller;

/*This is a Studio Managed File. DO NOT EDIT THIS FILE. Your changes may be reverted by Studio.*/

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wavemaker.commons.wrapper.StringWrapper;
import com.wavemaker.runtime.data.export.DataExportOptions;
import com.wavemaker.runtime.data.export.ExportType;
import com.wavemaker.runtime.data.expression.QueryFilter;
import com.wavemaker.runtime.data.model.AggregationInfo;
import com.wavemaker.runtime.file.manager.ExportedFileManager;
import com.wavemaker.runtime.file.model.Downloadable;
import com.wavemaker.tools.api.core.annotations.WMAccessVisibility;
import com.wavemaker.tools.api.core.models.AccessSpecifier;
import com.wordnik.swagger.annotations.Api;
import com.wordnik.swagger.annotations.ApiOperation;
import com.wordnik.swagger.annotations.ApiParam;

import com.mu.cmt.pfs.pfsdb.Crt800;
import com.mu.cmt.pfs.pfsdb.Crt800Id;
import com.mu.cmt.pfs.pfsdb.service.Crt800Service;


/**
 * Controller object for domain model class Crt800.
 * @see Crt800
 */
@RestController("pfsdb.Crt800Controller")
@Api(value = "Crt800Controller", description = "Exposes APIs to work with Crt800 resource.")
@RequestMapping("/pfsdb/Crt800")
public class Crt800Controller {

    private static final Logger LOGGER = LoggerFactory.getLogger(Crt800Controller.class);

    @Autowired
	@Qualifier("pfsdb.Crt800Service")
	private Crt800Service crt800Service;

	@Autowired
	private ExportedFileManager exportedFileManager;

	@ApiOperation(value = "Creates a new Crt800 instance.")
    @RequestMapping(method = RequestMethod.POST)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Crt800 createCrt800(@RequestBody Crt800 crt800) {
		LOGGER.debug("Create Crt800 with information: {}" , crt800);

		crt800 = crt800Service.create(crt800);
		LOGGER.debug("Created Crt800 with information: {}" , crt800);

	    return crt800;
	}

    @ApiOperation(value = "Returns the Crt800 instance associated with the given composite-id.")
    @RequestMapping(value = "/composite-id", method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Crt800 getCrt800(@RequestParam("seqnum") Short seqnum, @RequestParam("shpnum") String shpnum, @RequestParam("ordnum") String ordnum, @RequestParam("pshpnum") String pshpnum, @RequestParam("ctntype") String ctntype) {

        Crt800Id crt800Id = new Crt800Id();
        crt800Id.setSeqnum(seqnum);
        crt800Id.setShpnum(shpnum);
        crt800Id.setOrdnum(ordnum);
        crt800Id.setPshpnum(pshpnum);
        crt800Id.setCtntype(ctntype);

        LOGGER.debug("Getting Crt800 with id: {}" , crt800Id);
        Crt800 crt800 = crt800Service.getById(crt800Id);
        LOGGER.debug("Crt800 details with id: {}" , crt800);

        return crt800;
    }



    @ApiOperation(value = "Updates the Crt800 instance associated with the given composite-id.")
    @RequestMapping(value = "/composite-id", method = RequestMethod.PUT)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Crt800 editCrt800(@RequestParam("seqnum") Short seqnum, @RequestParam("shpnum") String shpnum, @RequestParam("ordnum") String ordnum, @RequestParam("pshpnum") String pshpnum, @RequestParam("ctntype") String ctntype, @RequestBody Crt800 crt800) {

        crt800.setSeqnum(seqnum);
        crt800.setShpnum(shpnum);
        crt800.setOrdnum(ordnum);
        crt800.setPshpnum(pshpnum);
        crt800.setCtntype(ctntype);

        LOGGER.debug("Crt800 details with id is updated with: {}" , crt800);

        return crt800Service.update(crt800);
    }


    @ApiOperation(value = "Deletes the Crt800 instance associated with the given composite-id.")
    @RequestMapping(value = "/composite-id", method = RequestMethod.DELETE)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public boolean deleteCrt800(@RequestParam("seqnum") Short seqnum, @RequestParam("shpnum") String shpnum, @RequestParam("ordnum") String ordnum, @RequestParam("pshpnum") String pshpnum, @RequestParam("ctntype") String ctntype) {

        Crt800Id crt800Id = new Crt800Id();
        crt800Id.setSeqnum(seqnum);
        crt800Id.setShpnum(shpnum);
        crt800Id.setOrdnum(ordnum);
        crt800Id.setPshpnum(pshpnum);
        crt800Id.setCtntype(ctntype);

        LOGGER.debug("Deleting Crt800 with id: {}" , crt800Id);
        Crt800 crt800 = crt800Service.delete(crt800Id);

        return crt800 != null;
    }


    /**
     * @deprecated Use {@link #findCrt800s(String, Pageable)} instead.
     */
    @Deprecated
    @ApiOperation(value = "Returns the list of Crt800 instances matching the search criteria.")
    @RequestMapping(value = "/search", method = RequestMethod.POST)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Page<Crt800> searchCrt800sByQueryFilters( Pageable pageable, @RequestBody QueryFilter[] queryFilters) {
        LOGGER.debug("Rendering Crt800s list by query filter:{}", (Object) queryFilters);
        return crt800Service.findAll(queryFilters, pageable);
    }

    @ApiOperation(value = "Returns the paginated list of Crt800 instances matching the optional query (q) request param. If there is no query provided, it returns all the instances. Pagination & Sorting parameters such as page& size, sort can be sent as request parameters. The sort value should be a comma separated list of field names & optional sort order to sort the data on. eg: field1 asc, field2 desc etc ")
    @RequestMapping(method = RequestMethod.GET)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Page<Crt800> findCrt800s(@ApiParam("conditions to filter the results") @RequestParam(value = "q", required = false) String query, Pageable pageable) {
        LOGGER.debug("Rendering Crt800s list by filter:", query);
        return crt800Service.findAll(query, pageable);
    }

    @ApiOperation(value = "Returns the paginated list of Crt800 instances matching the optional query (q) request param. This API should be used only if the query string is too big to fit in GET request with request param. The request has to made in application/x-www-form-urlencoded format.")
    @RequestMapping(value="/filter", method = RequestMethod.POST, consumes= "application/x-www-form-urlencoded")
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Page<Crt800> filterCrt800s(@ApiParam("conditions to filter the results") @RequestParam(value = "q", required = false) String query, Pageable pageable) {
        LOGGER.debug("Rendering Crt800s list by filter", query);
        return crt800Service.findAll(query, pageable);
    }

    @ApiOperation(value = "Returns downloadable file for the data matching the optional query (q) request param. If query string is too big to fit in GET request's query param, use POST method with application/x-www-form-urlencoded format.")
    @RequestMapping(value = "/export/{exportType}", method = {RequestMethod.GET,  RequestMethod.POST}, produces = "application/octet-stream")
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public Downloadable exportCrt800s(@PathVariable("exportType") ExportType exportType, @ApiParam("conditions to filter the results") @RequestParam(value = "q", required = false) String query, Pageable pageable) {
         return crt800Service.export(exportType, query, pageable);
    }

    @ApiOperation(value = "Returns a URL to download a file for the data matching the optional query (q) request param and the required fields provided in the Export Options.") 
    @RequestMapping(value = "/export", method = {RequestMethod.POST}, consumes = "application/json")
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
    public StringWrapper exportCrt800sAndGetURL(@RequestBody DataExportOptions exportOptions, Pageable pageable) {
        String exportedFileName = exportOptions.getFileName();
        if(exportedFileName == null || exportedFileName.isEmpty()) {
            exportedFileName = Crt800.class.getSimpleName();
        }
        exportedFileName += exportOptions.getExportType().getExtension();
        String exportedUrl = exportedFileManager.registerAndGetURL(exportedFileName, outputStream -> crt800Service.export(exportOptions, pageable, outputStream));
        return new StringWrapper(exportedUrl);
    }

	@ApiOperation(value = "Returns the total count of Crt800 instances matching the optional query (q) request param. If query string is too big to fit in GET request's query param, use POST method with application/x-www-form-urlencoded format.")
	@RequestMapping(value = "/count", method = {RequestMethod.GET, RequestMethod.POST})
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
	public Long countCrt800s( @ApiParam("conditions to filter the results") @RequestParam(value = "q", required = false) String query) {
		LOGGER.debug("counting Crt800s");
		return crt800Service.count(query);
	}

    @ApiOperation(value = "Returns aggregated result with given aggregation info")
	@RequestMapping(value = "/aggregations", method = RequestMethod.POST)
    @WMAccessVisibility(value = AccessSpecifier.APP_ONLY)
	public Page<Map<String, Object>> getCrt800AggregatedValues(@RequestBody AggregationInfo aggregationInfo, Pageable pageable) {
        LOGGER.debug("Fetching aggregated results for {}", aggregationInfo);
        return crt800Service.getAggregatedValues(aggregationInfo, pageable);
    }


    /**
	 * This setter method should only be used by unit tests
	 *
	 * @param service Crt800Service instance
	 */
	protected void setCrt800Service(Crt800Service service) {
		this.crt800Service = service;
	}

}