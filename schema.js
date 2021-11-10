window.outsideSchema = {
    "projectA": {
        "methods": ["planA"],
        "diff_obj": {
            "objA": {
                "a1_file": {
                    "single": "single_file_multiple_row",
                    "field": {
                        "planA": {
                            "filter": function () {
                                return true
                            },
                            "unique": "id",
                            "number": "number"
                        }
                    }
                }
            },
            "objB": {
                "b1_file": {
                    "single": "single_file_single_row",
                    "field": {
                        "planA": {
                            "filter": function () {
                                return true
                            },
                            "unique": "id",
                            "number": function (e) {
                                return e['number1'] + e['number2']
                            }
                        }
                    }
                }
            }
        }
    },
    "projectB": {
        "methods": ["planA"],
        "diff_obj": {
            "objA": {
                "a1_file": {
                    "single": "multiple_file_single_row",
                    "field": {
                        "planA": {
                            "filter":function() {
                                return true
                            },
                            "unique": "id",
                            "number": "number"
                        }
                    }
                },
                "a2_file": {
                    "single": "multiple_file_multiple_row",
                    "field": {
                        "planA": {
                            "filter":function() {
                                return true
                            },
                            "unique": "id",
                            "number": "number"
                        }
                    }
                }
            },
            "objB": {
                "b1_file": {
                    "single": "multiple_file_single_row",
                    "field": {
                        "planA": {
                            "filter":function() {
                                return true
                            },
                            "unique": "id",
                            "number": "number"
                        }
                    }
                }
            }
        }
    }
};